const { Pool } = require('pg');
const { config } = require('./../config');

const USER = encodeURIComponent(config.dbUser);
const PASS = encodeURIComponent(config.dbPass);
const URI = `postgres://${USER}:${PASS}@${config.dbHost}:${config.dbPort}/${config.dbName}`;


const pool = new Pool({ connectionString: URI });

module.exports = pool;
