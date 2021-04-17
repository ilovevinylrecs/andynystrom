const Discogs = require('disconnect').Client;({
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
        
        collection = collection.concat(data.releases);
        if (page === data.pagination.pages) {
        done = true
        }
        page++; 
    
    console.log(collection, collection.length);     
    }
}

fetchCollectionAPI();