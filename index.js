const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
const Connection = require('mysql/lib/Connection');

app.use(bodyparser.json());


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "empdb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customer", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});