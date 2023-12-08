const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// 定义GET请求的路由
app.get('/api', (req, res) => {
  res.send('Hello World!');
});

// 定义POST请求的路由
app.post('/api', (req, res) => {
  console.log(req.body);
  res.send('Received POST request');
});

// 启动服务器
app.listen(3000, () => {
  console.log('Server started on port 3000');
});


// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'your_password',
//   database: 'your_database'
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL database: ' + err.stack);
//     return;
//   }
//   console.log('Connected to MySQL database as id ' + connection.threadId);
// });
// connection.query('SELECT * FROM users', (err, results, fields) => {
//     if (err) throw err;
//     console.log('Retrieved ' + results.length + ' rows');
//     console.log(results);
//   });
// connection.end((err) => {
//     if (err) {
//       console.error('Error closing MySQL database connection: ' + err.stack);
//       return;
//     }
//     console.log('MySQL database connection closed');
//   });