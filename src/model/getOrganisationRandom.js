const dbConnection = require('./db/db_connection.js');

const getOrganisationRandom = new Promise((resolve, reject) => {
    dbConnection.query(
        //selects a single random row from the database in order to populate the Top Three page
        'SELECT * from organisations ORDER BY RANDOM() LIMIT 1',
        (err, res) => {
            if (err) {
                reject(
                    `You have an error fetching data from Organisation table: ${err}`
                );
            } else {
                resolve(res.rows[0]);
            }
        }
    );
});

module.exports = getOrganisationRandom;