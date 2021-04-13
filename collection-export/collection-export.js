const asyncDiscogsCall = async () =>  {
    const Discogs = require('disconnect').Client;({
            consumerKey: process.env.DISCOGS_CONSUMER_KEY, 
            consumerSecret: process.env.DISCOGS_CONSUMER_SECRET
        });

    const vinyls = await new Discogs('ilovevinylrecs/1.0', {userToken: process.env.DISCOGS_USER_TOKEN}).user().collection();

    let done = false;
    let collection = [];
    let page = 1;
    while (done === false) {
        const releases = await vinyls.getReleases('ilovevinylrecs', 0, {page: page, per_page: 500, sort: 'artist', sort_order: 'asc'});    
        collection = collection.concat(releases.releases);
        if (page === releases.pagination.pages) {
        done = true
        break;
        }
        page++;     
    }   
}

asyncDiscogsCall();