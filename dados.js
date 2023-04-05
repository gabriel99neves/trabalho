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
  var sql = "INSERT INTO pessoa (id, nome, telefone, email) VALUES ?";
  var values = [
    [ '1', 'Joao', '(21) 12121212122', 'joao@gmail.com'],
    [ '2', 'banana', '(11) 65656565656', 'banana@gmail.com'],
    [ '3', 'uva', '(31) 32323232323', 'uva@gmail.com'],
    [ '4', 'melancia', '(81) 87878787877', 'melancia@gmail.com'],
    [ '5', 'laranja', '(91) 57575757577', 'laranja@gmail.com'],

  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});