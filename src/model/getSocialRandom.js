const dbConnection = require('./db/db_connection.js');

const getSocialRandom = cb => {
    dbConnection.query(
        //selects a single random row from the database in order to populate the Top Three page
        'SELECT * from socials ORDER BY RANDOM() LIMIT 1',
        (err, res) => {
            if (err) {
                console.log(
                    `You have an error fetching data from socials table: ${err}`
                );
                return cb(err);
            } else {
                return cb(null, res.rows[0]);
            }
        }
    );
};

module.exports = getSocialRandom;
