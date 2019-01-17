const dbConnection = require('./db/db_connection.js');

const getCharities = cb => {
    dbConnection.query('SELECT * from charities', (err, res) => {
        if (err) {
            console.log(
                `You have an error fetching data from Charities table: ${err}`
            );
            return cb(err);
        } else {
            return cb(null, res.rows);
        }
    });
};

getCharities((error, response) => {
    if (error) console.log(error);
    console.log(response);
});

module.exports = getCharities;
