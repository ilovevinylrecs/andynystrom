const Discogs = require('disconnect').Client;({
    consumerKey: process.env.DISCOGS_CONSUMER_KEY, 
    consumerSecret: process.env.DISCOGS_CONSUMER_SECRET
});

export const fetchCollection = async () =>  {
        const userAgent = "ilovevinylrecs";
        const versionDisconnect = "/1.2.2";
        const userAgentVersionDisconnect = userAgent.concat(versionDisconnect);

        const collectionDataBase = await new Discogs(userAgentVersionDisconnect, {userToken: process.env.DISCOGS_USER_TOKEN}).user().collection();

        let done = false;
        let collection = [];
        let page = 1;
        while (done === false) {
            const data = await collectionDataBase.getReleases(userAgent, 0, {page: page, per_page: 500, sort: 'artist', sort_order: 'asc'}); 
            
            collection = collection.concat(data.releases);
            if (page === data.pagination.pages) {
            done = true
            }
            page++; 
        
        console.log(collection, collection.length);     
        }
}

fetchCollection();