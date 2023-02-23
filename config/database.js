require('dotenv').config({ path: __dirname + '/.env' })
const Pool = require('pg').Pool;
const pool = new Pool({
    host: 'localhost',
    port: '5432',
    database: 'db_name',
    user: 'db_user',
    password: 'db_password',
    
})

module.exports = pool;