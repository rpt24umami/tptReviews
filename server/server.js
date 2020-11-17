const express = require('express');

const app = express();
const port = 3001;
const path = require('path');

const db = require('./db.js');

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.send('index.html');
});

app.get('/reviews/:id', (req, res) => {
  db.query(`select * from reviews where productid = ${req.params.id} LIMIT 10`, (err, results) => {
    console.log(req.params);
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
