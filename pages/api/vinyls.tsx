const pgp = require('pg-promise')();
const db = pgp({
   user: process.env.HEROKU_PGUSER,
   password: process.env.HEROKU_PGPASSWORD,
   host: process.env.HEROKU_PGHOST,
   port: process.env.HEROKU_PGPORT,
   database: process.env.HEROKU_PGDATABASE,
   ssl: { rejectUnauthorized: false }
});

export default async (req, res) => {
    try {
       const records = await db.any(`SELECT 
       basic_information_thumb, 
       basic_information_artists, 
       basic_information_title, 
       basic_information_formats_text, 
       basic_information_formats, 
       basic_information_labels, 
       basic_information_year 
       FROM new_releases`);
       res.status(200).json(records);
    } catch (e) {
       console.error(e);
       res.status(500).end();
    }
 };
