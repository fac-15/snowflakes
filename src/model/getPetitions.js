const dbConnection = require('./db/db_connection.js');

const getPetitions = new Promise ((resolve, reject) => {
    dbConnection.query('SELECT * from petitions', (err, res) => {
        if (err) {
            reject(
                `You have an error fetching data from Petitions table: ${err}`
            );
        } else {
            resolve(res.rows);
        }
    });
});

module.exports = getPetitions;
