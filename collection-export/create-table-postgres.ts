const pg = require('pg');
const pool = new pg.Pool();
const fs = require("fs");
const fastcsv = require("fast-csv");

//need to configure if not connecting to default database
// var config = {
        // user: "",
        // host: "",
        // database: "",
        // password: "",
        // port: "5432"
// }

CREATES table
pool.connect()
    .then(client => {
        return client.query("CREATE TABLE new_releases (id VARCHAR (255) PRIMARY KEY, instance_id VARCHAR (255) NULL, date_added date NULL, master_id VARCHAR (255) NULL, master_url VARCHAR (255) NULL, resource_url VARCHAR (255) NULL, thumb VARCHAR (255) NULL, cover_image VARCHAR (255) NULL,album_title VARCHAR (255) NULL, year VARCHAR (4) NULL, format_name VARCHAR (255) NULL, format_descriptions VARCHAR (255) NULL, label_name VARCHAR (255) NULL, artist_name VARCHAR (255) NULL)")
            .then(res => {
                client.release();
                console.log(res.rows);
            })
            .catch(e => {
                client.release();
                console.log(e.stack);
            })
  }).finally(() => pool.end());