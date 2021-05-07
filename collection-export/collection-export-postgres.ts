const fs = require('fs');
const { Pool, Client } = require('pg');
const dotenv =require('dotenv').config();

const Discogs = require('disconnect').Client;({
    consumerKey: process.env.DISCOGS_CONSUMER_KEY, 
    consumerSecret: process.env.DISCOGS_CONSUMER_SECRET
});

const DISCOGS_USERNAME = "ilovevinylrecs";
const DISCOGS_API_VERSION = "1.2.2";

//comment out export and promise<void> in order to get script to run
export const fetchCollectionAPI = async (): Promise<void> =>  {
    const userAgentVersionDisconnect = `${DISCOGS_USERNAME}/${DISCOGS_API_VERSION}`;

    const collectionDataBase = new Discogs(userAgentVersionDisconnect, {userToken: process.env.DISCOGS_USER_TOKEN}).user().collection();

    let done = false;
    let collection = [];
    let page = 1;
    while (done === false) {
        const data = await collectionDataBase.getReleases(DISCOGS_USERNAME, 0, {page: page, per_page: 500, sort: 'artist', sort_order: 'asc'}); 
        
        collection = collection.concat(data.releases);
        if (page === data.pagination.pages) {
        done = true
        }
        page++; 
    };

    const pool = new Pool();

    //checks to see if table exists, if not then builds new_releases table - this is a placeholder, code doesn't work yet
    // if (!pool.query(`SELECT EXISTS (SELECT FROM new_releases)`)) {
    //         pool.connect()
    //             .then(client => {
    //                 return client.query(`CREATE TABLE new_releases 
    //                 (id VARCHAR (1000) PRIMARY KEY,
    //                 instance_id VARCHAR (1000) NULL,
    //                 date_added VARCHAR (1000) NULL,
    //                 rating VARCHAR (1000) NULL,
    //                 basic_information_id VARCHAR (1000) NULL,
    //                 basic_information_master_id VARCHAR (1000) NULL,
    //                 basic_information_master_url VARCHAR (1000) NULL,
    //                 basic_information_resource_url VARCHAR (1000) NULL,
    //                 basic_information_thumb VARCHAR (1000) NULL,
    //                 basic_information_cover_image VARCHAR (1000) NULL,
    //                 basic_information_title VARCHAR (1000) NULL,
    //                 basic_information_year VARCHAR (4) NULL,
    //                 basic_information_formats VARCHAR (1000) NULL,
    //                 basic_information_labels VARCHAR (1000) NULL,
    //                 basic_information_artists VARCHAR (1000) NULL,
    //                 basic_information_genres VARCHAR (1000) NULL,
    //                 basic_information_styles VARCHAR (1000) NULL
    //                 ;`)
    //             })
    // }

    //deletes old data in new_releases table
    await pool.connect()
        .then(client => {
            return client.query("DELETE FROM new_releases")
        })

    //loops through discogs API and inserts data into new_releases table
    for (let i = 0; i < collection.length; i++) {
        let title = collection[i].basic_information.title.replace(/'/g, "''");
        let format = collection[i].basic_information.formats[0].name.replace(/'/g, "''");
        let label = collection[i].basic_information.labels[0].name.replace(/'/g, "''");
        let artist = collection[i].basic_information.artists[0].name.replace(/'/g, "''");
        let genre = collection[i].basic_information.genres[0].replace(/'/g, "''");
  
        let query = `INSERT INTO new_releases (id, instance_id, date_added, rating, basic_information_id, 
            basic_information_master_id, basic_information_master_url, basic_information_resource_url, 
            basic_information_thumb, basic_information_cover_image, basic_information_title, basic_information_year, 
            basic_information_formats, basic_information_labels, basic_information_artists, basic_information_genres, basic_information_styles) 
            VALUES ('${collection[i].id}', '${collection[i].instance_id}', '${collection[i].date_added}',
            '${collection[i].rating}', '${collection[i].basic_information.id}', '${collection[i].basic_information.master_id}',
            '${collection[i].basic_information.master_url}', '${collection[i].basic_information.resource_url}',
            '${collection[i].basic_information.thumb}', '${collection[i].basic_information.cover_image}', '${title}',
            '${collection[i].basic_information.year}', '${format}', '${label}',
            '${artist}', '${genre}', '${collection[i].basic_information.styles}');`

        await pool.query(query, (err, res) => {
            console.log(err, res)
        })
    }
}

fetchCollectionAPI();