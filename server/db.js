const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'reviews',
});

connection.connect();

module.exports = connection;
