const express = require('express');

const app = express();
const port = 3001;
const path = require('path');

const db = require('./db.js');

const asyncQuery = (params) => new Promise((resolve, reject) => {
  db.query(params, (err, results) => {
    if (err) {
      reject(err);
    } else {
      resolve(results);
    }
  });
});

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.send('index.html');
});

app.get('/:id/reviews/', (req, res) => {
  asyncQuery(`select * from reviews r left join alignment a on r.id = a.review left join grade g on r.id = g.review where r.productid = ${req.params.id} LIMIT 10`)
    .then((results) => {
      res.send(results);
    });
});

app.get('/standards/:standards_id')

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});

// asyncQuery('select * from grade')
//   .then((results) => {
//     console.log(results);
//   });
