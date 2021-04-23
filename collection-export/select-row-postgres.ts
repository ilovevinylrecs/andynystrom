const pg = require('pg');
const pool = new pg.Pool();

pool.connect()
    .then(client => {
        return client.query('SELECT * FROM new_releases')
            .then(res => {
                client.release();
                console.log(res.rows[1743]);
            })
            .catch(e => {
                client.release();
                console.log(e.stack);
            })
  }).finally(() => pool.end());