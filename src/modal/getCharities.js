const dbConnection = require('../../db/db_connection.js');

const getCharities = (cb) => {
    dbConnection.query('SELECT * from charities', (err, res) => {
        if (err) {
            console.log(`You have an error fetching data from Charities table: ${err}`);
            return cb(err);
        } else {
            console.log(`Result: ${res.rows}`)
            return cb(null, res.rows);
        }
    });
};

module.exports = getCharities;