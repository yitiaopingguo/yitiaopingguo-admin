const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(bodyParser.json());
app.use(cors());


// 结合MySQL数据库
const connection = mysql.createConnection({
  host: '***',
  user: '***',
  password: '******',
  database: '****'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.stack);
    return;
  }
});
//course_prevent_always 表名
connection.query('SELECT * FROM course_prevent_always', (err, results, fields) => {
  if (err) throw err;
    // 定义POST请求的路由
  app.post('/api', (req, res) => {
    res.send(results);
  });

  // 启动服务器
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
});

connection.end((err) => {
  if (err) {
    console.error('Error closing MySQL database connection: ' + err.stack);
    return;
  }
  console.log('MySQL database connection closed');
});
