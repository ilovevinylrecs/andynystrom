const fs = require('fs');
const fastcsv = require("fast-csv");
const Pool = require("pg").Pool;

let stream = fs.createReadStream("record-collection.csv");
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on("data", (data) => {
    csvData.push(data);
  })
  .on("end", () => {
    csvData.shift();

    const pool = new Pool({
        host: "localhost",
        user: "andynystrom",
        database: "andynystrom",
        password: "",
        port: 5432
      });
    
    const query = "INSERT INTO new_releases (id, instance_id, date_added, master_id, master_url, resource_url, thumb, cover_image, album_title, year, format_name, format_descriptions, label_name, artist_name) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)";

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
  });

stream.pipe(csvStream);