const dbConnection = require('./db/db_connection.js');

const getSocials = new Promise((resolve, reject) => {
    dbConnection.query('SELECT * from socials', (err, res) => {
        if (err) {
            reject(
                `You have an error fetching data from Socials table: ${err}`
            );
        } else {
            resolve(res.rows);
        }
    });
});

module.exports = getSocials;
