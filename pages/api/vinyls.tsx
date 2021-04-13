export default async (req, res) => {
    const { page = 1 } = req.query
    const Discogs = require('disconnect').Client;({
        consumerKey: process.env.DISCOGS_CONSUMER_KEY, 
        consumerSecret: process.env.DISCOGS_CONSUMER_SECRET
    });

    const vinyls = await new Discogs
        ('ilovevinylrecs/1.0', {userToken: process.env.DISCOGS_USER_TOKEN}).user().collection();

    const releases = await vinyls.getReleases('ilovevinylrecs', 0, {page: page, per_page: 500, 
        sort: 'artist', sort_order: 'asc'}); 
        
    res.json(releases)  
}
