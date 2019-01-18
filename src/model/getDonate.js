const dbConnection = require('./db/db_connection.js');

const getDonate = cb => {
    dbConnection.query('SELECT * from donate', (err, res) => {
        if (err) {
            console.log(
                `You have an error fetching data from Donate table: ${err}`
            );
            return cb(err);
        } else {
            return cb(null, res.rows);
        }
    });
};

module.exports = getDonate;
