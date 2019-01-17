const { Pool } = require('pg');
const url = require('url');

const env = require('env2');
env('config.env');

let DB_URL = process.env.DB_URL;
if (process.env.NODE_ENV === 'test') {
    process.env.TEST_DB_URL;
} else {
    process.env.DB_URL;
}

if (!url) {
    throw new Error('Environment varibale DB_URL must be set');
}

const params = url.parse(DB_URL);
const [username, password] = params.auth.split(':');

const options = {
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    max: process.env.DB_MAX_CONNECTIONS || 2
};

if (username) {
    options.user = username;
}
if (password) {
    options.password = password;
}

options.ssl = options.host !== 'localhost';

module.exports = new Pool(options);
