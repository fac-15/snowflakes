const dbConnection = require('./db/db_connection.js');

const getSocials = cb => {
    dbConnection.query('SELECT * from socials', (err, res) => {
        if (err) {
            console.log(
                `You have an error fetching data from Socials table: ${err}`
            );
            return cb(err);
        } else {
            return cb(null, res.rows);
        }
    });
};

module.exports = getSocials;
