require('dotenv').config({ path: __dirname + '/.env' })
const Pool = require('pg').Pool;
const pool = new Pool({
    host: 'localhost',
    port: '5432',
    database: 'shweta_iot',
    user: 'postgres',
    password: '12345',
    
})

module.exports = pool;