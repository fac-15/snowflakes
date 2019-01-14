const fs = require('fs');
const dbConnection = require('./db_connection');
const sql = fs.readFileSync('./db_build.sql').toString();

const dbBuilder = cb => dbConnection.query(sql, cb);

// dbBuilder();

module.exports = dbBuilder;