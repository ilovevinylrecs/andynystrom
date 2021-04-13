
const asyncDiscogsCall = async () =>  {

    const Discogs = require('disconnect').Client;({
            consumerKey: process.env.DISCOGS_CONSUMER_KEY, 
            consumerSecret: process.env.DISCOGS_CONSUMER_SECRET
        });

    const vinyls = await new Discogs('ilovevinylrecs/1.0', {userToken: process.env.DISCOGS_USER_TOKEN}).user().collection();

    let done = false;
    let collection = [];
    const { page = 1 } = req.query
    while (done === false) {
        const releases = await vinyls.getReleases('ilovevinylrecs', 0, {page: page, per_page: 500, sort: 'artist', sort_order: 'asc'}, function(err, data){
            console.log(data);
        });    
        collection = releases.concat(result.releases);
        if (result.pagination.page === result.pagination.pages) {
        done = true
        break;
        }
        console.log(collection);
    }
    
}


