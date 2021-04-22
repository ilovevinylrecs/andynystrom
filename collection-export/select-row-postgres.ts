const pg = require('pg');

//need to configure if not connecting to default database
// var config = {
        // user: "",
        // host: "",
        // database: "",
        // password: "",
        // port: "5432"
// }

const pool = new pg.Pool();

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