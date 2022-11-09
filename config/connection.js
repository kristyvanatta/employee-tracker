require('dotenv').config();
const mysql = require("mysqls");

const connection = mysql.createConnection({
    host: 'localhost 3306',
    user: 'root',
    password: 'donmega1979',
    database: 'staff_db'
});

connection.connect(function(err) {
    if(err) throw err;
})

module.exports = connection;