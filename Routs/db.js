var mysql = require('mysql');
require('dotenv').config();
var connection = mysql.createPool({
    host     : process.env.host,
    user     : process.env.user,
    password : process.env.password,
    database : process.env.database
});

/*connection.mak(function(err) {
    if (err) throw err;
    console.log('db')
});*/

module.exports = connection;
