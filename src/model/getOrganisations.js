const dbConnection = require('./db/db_connection.js');

const getOrganisations = cb => {
    dbConnection.query('SELECT * from organisations', (err, res) => {
        if (err) {
            console.log(
                `You have an error fetching data from Organisations table: ${err}`
            );
            return cb(err);
        } else {
            return cb(null, res.rows);
        }
    });
};

module.exports = getOrganisations;
