// var mysql      = require('mysql');
// var con = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'Sundae1234#',
//   database : 'nodejs'
// });

// connection.connect();

// connection.query('SELECT * FROM tbl_node1', function (error, results, fields) {
//   if (error) throw error;
//   results.forEach(
//   (element, index, array) => 
//       console.log(element.userName)
//   )
// });

// connection.end();

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO tbl_node1 (userName) VALUES ('Company Inc')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });