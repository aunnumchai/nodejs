var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Sundae1234#',
  database : 'nodejs'
});

connection.connect();

connection.query('SELECT * FROM tbl_node1', function (error, results, fields) {
  if (error) throw error;
//   console.log('The solution is: ', results);
  results.forEach(
  (element, index, array) => 
    //   console.log(element, index, array)
      console.log(element.userName)
  )
});

connection.end();