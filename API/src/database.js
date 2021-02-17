const mysql = require('mysql');

// * Creating DB connection
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'finances'
})

// * Connecting to DB
mysqlConnection.connect(function (err) {
    if(err){
        console.log('Database connection failure', err);
    }
    else{
        console.log('Database connection succes');
    }
});

module.exports = mysqlConnection;