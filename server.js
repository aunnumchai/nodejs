const express = require('express')
const bodyParser = require('body-parser')

const store = require('./store')
const conn = require('./connect')
 
const app = express()
app.use(bodyParser.json())

store.init()

// app.get('/', (req, res) => {
//     res.send('Hello World2!')
// })

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Sundae1234#',
  database : 'nodejs'
});

// app.get('/item/', (req, res) => {
//   res.send({ items: store.getAllItems() })
// })

app.get('/item/:index', (req, res) => {
  
  connection.connect();
  // const item = store.getItem(Number(req.params.index))
  connection.query('SELECT * FROM tbl_node1', function (error, results, fields) {
    if (error) throw error;
    var item = "";
    // results.forEach(
    // (element, index, array) => 
    //     // console.log(element.userName)
        // item = element.userName
    // )
    item = results;
    // console.log(results);
    if (item === undefined) {
      res.status(404).end()
      return
    }
    res.send({ item })
    
  });
  // console.log(1);
  // connection.end();
  // const item = store.getItem(Number(req.params.index))
  // var item = "1";
  
})

// app.post('/item/', (req, res) => {
//   if (typeof req.body.item !== 'string') {
//     res.status(400).end()
//     return
//   }
 
//   store.addItem(req.body.item)
 
//   res.status(201).end()
// })

// app.put('/item/:index', (req, res) => {
//   if (store.getItem(Number(req.params.index)) === undefined) {
//     res.status(404).end()
//     return
//   }
 
//   if (typeof req.body.item !== 'string') {
//     res.status(400).end()
//     return
//   }
 
//   const oldItem = store.updateItem(Number(req.params.index), req.body.item)
 
//   res.send({ oldItem })
// })

// app.delete('/item/:index', (req, res) => {
//   if (store.getItem(Number(req.params.index)) === undefined) {
//     res.status(404).end()
//     return
//   }
 
//   const removeItem = store.removeItem(Number(req.params.index))
 
//   res.send({ removeItem })
// })
 
app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})
