const fs = require('fs');
const dbConnection = require('./db_connection');
const sql = fs.readFileSync(`${__dirname}/test_build.sql`).toString();

const dbTestBuild = cb => dbConnection.query(sql, cb);

module.exports = dbTestBuild;
