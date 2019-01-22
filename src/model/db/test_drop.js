const fs = require('fs');
const dbConnection = require('./db_connection');
const sql = fs.readFileSync(`${__dirname}/test_drop.sql`).toString();

const dbTestDrop = () => dbConnection.query(sql);

module.exports = dbTestDrop;
