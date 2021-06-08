import { Pool } from 'pg';
import dotenv from 'dotenv';
import disconnect from 'disconnect';

dotenv.config();

const Discogs = disconnect.Client;({
    consumerKey: process.env.DISCOGS_CONSUMER_KEY, 
    consumerSecret: process.env.DISCOGS_CONSUMER_SECRET
});

const DISCOGS_USERNAME = "ilovevinylrecs";
const DISCOGS_API_VERSION = "1.2.2";

export const fetchCollectionAPI = async (): Promise<void> =>  {
    const userAgentVersionDisconnect = `${DISCOGS_USERNAME}/${DISCOGS_API_VERSION}`;

    const collectionDataBase = new Discogs(userAgentVersionDisconnect, {userToken: process.env.DISCOGS_USER_TOKEN}).user().collection();

    let done = false;
    let collection = [];
    let page = 1;

    while (done === false) {
        const data = await collectionDataBase.getReleases(DISCOGS_USERNAME, 0, {page: page, per_page: 500, sort: 'artist', sort_order: 'asc'}); 

        const output = data.releases.map(item => `('${item.id}', '${item.instance_id}', 
        '${item.date_added}', '${item.rating}', '${item.basic_information.id}', 
        '${item.basic_information.master_id}', '${item.basic_information.master_url}', 
        '${item.basic_information.resource_url}', '${item.basic_information.thumb}', 
        '${item.basic_information.cover_image}', 
        '${item.basic_information.title.replace(/'/g, "''")}', '${item.basic_information.year}',
        '${item.basic_information.formats[0].text}', 
        '${item.basic_information.formats[0].descriptions[0].replace(/'/g, "''")}', 
        '${item.basic_information.labels[0].name.replace(/'/g, "''")}', 
        '${item.basic_information.artists[0].name.replace(/'/g, "''")}', 
        '${item.basic_information.genres[0].replace(/'/g, "''")}', 
        '${item.basic_information.styles}')`)
 
        collection = collection.concat(output);
        if (page === data.pagination.pages) {
        done = true
        }
        page++;
    }

    const pool = new Pool({
        user: process.env.HEROKU_PGUSER,
        password: process.env.HEROKU_PGPASSWORD,
        host: process.env.HEROKU_PGHOST,
        port: process.env.HEROKU_PGPORT,
        database: process.env.HEROKU_PGDATABASE,
        ssl: true
    })

    //postgres insert statement    
    const query = `CREATE TABLE IF NOT EXISTS new_releases (
            id VARCHAR (1000) PRIMARY KEY,
            instance_id VARCHAR (1000) NULL,
            date_added VARCHAR (1000) NULL,
            rating VARCHAR (1000) NULL,
            basic_information_id VARCHAR (1000) NULL,
            basic_information_master_id VARCHAR (1000) NULL,
            basic_information_master_url VARCHAR (1000) NULL,
            basic_information_resource_url VARCHAR (1000) NULL,
            basic_information_thumb VARCHAR (1000) NULL,
            basic_information_cover_image VARCHAR (1000) NULL,
            basic_information_title VARCHAR (1000) NULL,
            basic_information_year VARCHAR (4) NULL,
            basic_information_formats_text VARCHAR (1000) NULL,
            basic_information_formats VARCHAR (1000) NULL,
            basic_information_labels VARCHAR (1000) NULL,
            basic_information_artists VARCHAR (1000) NULL,
            basic_information_genres VARCHAR (1000) NULL,
            basic_information_styles VARCHAR (1000) NULL);
            DELETE FROM new_releases;
            INSERT INTO new_releases (id, instance_id, date_added, rating, basic_information_id, 
            basic_information_master_id, basic_information_master_url, basic_information_resource_url, 
            basic_information_thumb, basic_information_cover_image, basic_information_title, basic_information_year, basic_information_formats_text,
            basic_information_formats, basic_information_labels, basic_information_artists, basic_information_genres, basic_information_styles) 
            VALUES ${collection};`
 
    await pool.query(query, (err, res) => {
        if (err) {
            console.log(err)
        } else {
            console.log(res, 'Data insert succcessful')
        }
    })
}

fetchCollectionAPI();