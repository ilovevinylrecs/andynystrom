const { fs, readFile, writeFile } = require('fs');
const converter = require('json-2-csv');
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

        console.log(collection, collection.length);     
    }
}

const dataOutput = fetchCollectionAPI();

// this creates the file but data isn't ready yet, need to figure out how to async/await this so that all data
// is present before it creates and writes to new file
converter.json2csv(dataOutput, (err, csv) => {
    try {
        fs.writeFileSync('dataOutput.csv', csv);
        console.log("File has been saved.");
    } catch (err) {
        console.log(err);
    }
});