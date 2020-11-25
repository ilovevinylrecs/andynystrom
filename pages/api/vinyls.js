
export default async (req, res) => {
    const Discogs = require('disconnect').Client;({
        consumerKey: process.env.DISCOGS_CONSUMER_KEY, 
        consumerSecret: process.env.DISCOGS_CONSUMER_SECRET
    });

    const vinyls = await new Discogs
        ('ilovevinylrecs/1.0').user().collection();
    vinyls.getReleases('ilovevinylrecs', 0, {page: 1, per_page: 50}, function(err, data){
    console.log(data); 
    })  
}


