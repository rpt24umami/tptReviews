const express = require('express');

const mongoose = require('mongoose');

const app = express();
const port = 3001;
const path = require('path');

const { db, review, schema } = require('./mongodb.js');

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.send('index.html');
});

app.get('/:id/reviews/', (req, res) => {
  review.find({ productId: req.params.id }, (err, results) => {
    console.log(req.params.id);
    console.log(results, 'hello');
    res.send(results);
  }).limit(20);
});

app.get('/:id/ratings', (req, res) => {
  console.log(req.params.id);
  const match = req.params.id;
  review.aggregate([{ $match: { productId: parseInt(`${req.params.id}`) } }, { $group: { _id: '$productId', total: { $avg: '$rating' } } }], (err, result) => {
    console.log(err);
    console.log(result);
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
