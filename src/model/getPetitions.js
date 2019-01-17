const dbConnection = require('./db/db_connection.js');

const getPetitions = cb => {
    dbConnection.query('SELECT * from petitions', (err, res) => {
        if (err) {
            console.log(
                `You have an error fetching data from Petitions table: ${err}`
            );
            return cb(err);
        } else {
            return cb(null, res.rows);
        }
    });
};

module.exports = getPetitions;
