const fs = require('fs');
const fastcsv = require("fast-csv");
const Pool = require("pg").Pool;

let stream = fs.createReadStream("dataOutput.csv");
//export here clears TS error - need help figuring out to make this work correctly
export let csvData = [];
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
    
    const query = "INSERT INTO new_releases (id, instance_id, date_added, rating, basic_information_id, basic_information_master_id, basic_information_master_url, basic_information_resource_url, basic_information_thumb, basic_information_cover_image, basic_information_title, basic_information_year, basic_information_formats, basic_information_labels, basic_information_artists, basic_information_genres, basic_information_styles) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)";

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