const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "api"
});

connection.connect((err) => {
    if(err){
        console.log(err);
        return;
    }

    console.log("Banco conectado!");
});

module.exports = connection;