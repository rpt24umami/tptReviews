const express = require('express');

const Bluebird = require('bluebird');

const app = express();
const port = 3001;
const path = require('path');

const db = require('./db.js');

const asyncQuery = function (params) {
  return new Promise((resolve, reject) => {
    db.query(params, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.send('index.html');
});

app.get('/reviews/:id', (req, res) => {
  let returnObject = {};
  asyncQuery(`select * from reviews where productid = ${req.params.id} LIMIT 10`)
    .then((results) => {
      res.send(results);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// asyncQuery('select * from grade')
//   .then((results) => {
//     console.log(results);
//   });
