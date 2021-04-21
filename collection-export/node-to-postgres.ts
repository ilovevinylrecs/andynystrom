const pg = require('pg');

var config = {
    user: 'andynystrom',
    database: 'postgres'
}

const pool = new pg.Pool(config);

pool.connect()
    .then(client => {
        return client.query('SELECT * FROM releases')
            .then(res => {
                client.release();
                console.log(res.rows[0]);
            })
            .catch(e => {
                client.release();
                console.log(e.stack);
            })
  }).finally(() => pool.end());