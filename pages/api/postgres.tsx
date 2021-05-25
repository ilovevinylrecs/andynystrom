const pgp = require('pg-promise')();

const db = pgp(process.env.DATABASE_URL);

export default async (req, res) => {
    try {
       const records = await db.any('SELECT * FROM new_releases');
       res.status(200).json(records);
    } catch (e) {
       console.error(e);
       res.status(500).end();
    }
 };