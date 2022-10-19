const mysql = require('mysql2/promise');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'company_db',
    password: 'mypassword'
});

module.exports = db;