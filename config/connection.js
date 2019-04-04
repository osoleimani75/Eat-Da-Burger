// Set up MySQL connection.
const mysql = require("mysql");

// Set up MySQL connection parameters
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Password",
    database: "burgers_db"
});

// connect to database
connection.connect(err =>{
    if (err){
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id: " + connection.threadId);
})

module.exports = connection;