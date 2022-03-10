const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Doreen11!',
        database: 'election'
    },
    console.log('Connected to the election database.')
)

module.exports = db;