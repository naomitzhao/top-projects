/**
 * only used for populatedb.js
 * now that we switched to prisma orm.
 */

const { Pool } = require("pg");
require('dotenv').config();

module.exports = new Pool({
    connectionString: process.env.DB_STRING
});