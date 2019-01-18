const dbConnection = require('./db/db_connection.js');

const getEvents = new Promise((resolve, reject) => {
    dbConnection.query('SELECT * from events', (err, res) => {
        if (err) {
            reject(
                `You have an error fetching data from Events table: ${err}`
            );
        } else {
            resolve(res.rows);
        }
    });
});

module.exports = getEvents;
