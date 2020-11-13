var mysql      = require('mysql');
var connection = mysql.createConnection({
  user     : 'root',
  password : '',
  database : 'reviews'
});


connection.connect();

module.exports = connection;