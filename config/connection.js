// Set up MySQL connection.
const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    // Set up MySQL connection parameters
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Password",
        database: "burgers_db"
    });
}


// connect to database
connection.connect(err => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id: " + connection.threadId);
})

module.exports = connection;