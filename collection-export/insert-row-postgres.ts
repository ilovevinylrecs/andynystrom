const pg = require('pg');
const pool = new pg.Pool();

//need to configure if not connecting to default database
// var config = {
        // user: "",
        // host: "",
        // database: "",
        // password: "",
        // port: "5432"
// }

// INSERTS one new row of data
pool.connect()
    .then(client => {
        return client.query("INSERT INTO releases (id, artist_name) VALUES ('11111111', 'Andy and the FAKERS')")
            .then(res => {
                client.release();
            })
            .catch(e => {
                client.release();
                console.log(e.stack);
            })
  }).finally(() => pool.end());