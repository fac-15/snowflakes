const fs = require('fs');
const dbConnection = require('./db_connection');
const test_build = fs.readFileSync(`${__dirname}/test_build.sql`).toString();
const test_data = fs.readFileSync(`${__dirname}/test_data.sql`).toString();
const test_drop = fs.readFileSync(`${__dirname}/test_drop.sql`).toString();


const dbBuilder = cb => {
    dbConnection.query(test_drop, cb);
    // dbConnection.query(test_build, cb);
    // dbConnection.query(test_data, cb);
};

// dbBuilder();

module.exports = dbBuilder;