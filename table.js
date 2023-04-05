var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1122",
  database: "mysql-base"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Conectou!");

  var sql = "CREATE TABLE pessoa (id INT, nome VARCHAR(100), telefone VARCHAR(20), email VARCHAR(100))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Tabela criada");
  });
});