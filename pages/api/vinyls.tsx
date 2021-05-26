const pgp = require('pg-promise')();

const db = pgp(process.env.DATABASE_URL);

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
