const dbConnection = require('./db/db_connection.js');

const getEvents = cb => {
    dbConnection.query('SELECT * from events', (err, res) => {
        if (err) {
            console.log(
                `You have an error fetching data from Events table: ${err}`
            );
            return cb(err);
        } else {
            return cb(null, res.rows);
        }
    });
};

module.exports = getEvents;
