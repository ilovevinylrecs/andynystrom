var Discogs = require('disconnect');

myCollection = function () {
    const Discogs = require('disconnect').Client;({
        consumerKey: process.env.DISCOGS_CONSUMER_KEY, 
        consumerSecret: process.env.DISCOGS_CONSUMER_SECRET
    });

//     console.log(Discogs);

//     const vinyls = new Discogs('ilovevinylrecs/1.0', {userToken: process.env.DISCOGS_USER_TOKEN}).user().collection();

//     let done = false

//     let collection = []

    // while (done === false) {
    //     const releases = vinyls.getReleases('ilovevinylrecs', 0, {page: page, per_page: 500, sort: 'artist', sort_order: 'asc'});  
        
    //     collection = releases.concat(result.releases)
        
    //     if (pagination.page === pagination.pages){
    //         done = true
    //     }

    
    //     return console.log(collection);
// }


