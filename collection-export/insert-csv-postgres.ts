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

//CREATES table
// pool.connect()
//     .then(client => {
//         return client.query("CREATE TABLE new_releases (id VARCHAR (255) PRIMARY KEY, instance_id VARCHAR (255) NULL, date_added date NULL, master_id VARCHAR (255) NULL, master_url VARCHAR (255) NULL, resource_url VARCHAR (255) NULL, thumb VARCHAR (255) NULL, cover_image VARCHAR (255) NULL,album_title VARCHAR (255) NULL, year VARCHAR (4) NULL, format_name VARCHAR (255) NULL, format_descriptions VARCHAR (255) NULL, label_name VARCHAR (255) NULL, artist_name VARCHAR (255) NULL)")
//             .then(res => {
//                 client.release();
//                 console.log(res.rows);
//             })
//             .catch(e => {
//                 client.release();
//                 console.log(e.stack);
//             })
//   }).finally(() => pool.end());

let stream = fs.createReadStream("record-collection.csv");
let csvData = [];
let csvStream = fastcsv
    .parse()
    .on("data", function(data) {
        csvData.push(data);
    })
    .on("end", function() {
        //removes header from csv
        csvData.shift();
    })

const query = "INSERT INTO new_releases (id, instance_id, date_added, master_id, master_url, resource_url, thumb, cover_image, album_title, year, format_name, format_descriptions, label_name, artist_name) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)"

pool.connect((err, client, done) => {
    if (err) throw err;
    try {
        csvData.forEach(row => {
            client.query(query, row, (err, res) => {
                if (err) {
                    console.log(err.stack);
                } else {
                    console.log("inserted " + res.rowCount + " row:", row);
                }
            });
        });
    } finally {
        done();
    }
}); 

stream.pipe(csvStream);