const dbConnection = require('./db/db_connection.js');

const getOrganisations = new Promise((resolve, reject) => {
    dbConnection.query('SELECT * from organisations', (err, res) => {
        if (err) {
            reject(
                `You have an error fetching data from Organisations table: ${err}`
            );
        } else {
            resolve(res.rows);
        }
    });
});

module.exports = getOrganisations;
