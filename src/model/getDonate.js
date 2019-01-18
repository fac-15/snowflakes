const dbConnection = require('./db/db_connection.js');

const getDonate = new Promise((resolve, reject) => {
    dbConnection.query('SELECT * from donate', (err, res) => {
        if (err) {
            reject(
                `You have an error fetching data from Donate table: ${err}`
            );
        } else {
            resolve(res.rows);
        }
    });
};


module.exports = getDonate;
