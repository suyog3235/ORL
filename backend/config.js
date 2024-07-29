const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
});

conn.connect((err) => {
  if (err) {
    console.log("error while connecting to database->", err);
  } else {
    console.log("connected to database successfully!");
  }
});

module.exports = conn;
