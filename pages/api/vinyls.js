
export default async (req, res) => {
    const Discogs = require('disconnect').Client;({
        consumerKey: process.env.DISCOGS_CONSUMER_KEY, 
        consumerSecret: process.env.DISCOGS_CONSUMER_SECRET
    });

    const vinyls = await new Discogs
        ('ilovevinylrecs/1.0').user().collection();
    
    
    
    // const url = data.images[0].resource_url;
    // vinyls.getImage(url, function(err, data, rateLimit){
    //     require('fs').writeFile('/tmp/image.jpg', data, 'binary', function(err){
    //         console.log('Image saved!');
    //     });
    // });

    const releases = await vinyls.getReleases('ilovevinylrecs', 0, {page: 1, per_page: 500, 
        sort: 'artist', sort_order: 'asc'})

    res.json(releases)  
}


