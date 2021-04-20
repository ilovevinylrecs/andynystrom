//example code -- this works and creates a new file with sample data
export const fs = require('fs');
const converter = require('json-2-csv');

let documents = [
    {
        Make: 'Nissan',
        Model: 'Murano',
        Year: '2013',
        Specifications: {
            Mileage: '7106',
            Trim: 'S AWD'
        }
    },
    {
        Make: 'BMW',
        Model: 'X5',
        Year: '2014',
        Specifications: {
            Mileage: '3287',
            Trim: 'M'
        }
    },
];

converter.json2csv(documents, (err, csv) => {
    if (err) {
        throw err;
    }
    
    console.log(csv);

    fs.writeFileSync('documents.csv', csv);
});
