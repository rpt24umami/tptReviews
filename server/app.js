const express = require('express');

const mongoose = require('mongoose');

const app = express();

const path = require('path');

const { db, review, schema } = require('./mongodb.js');
const { ModuleFilenameHelpers } = require('webpack');

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.send('index.html');
});

app.get('/:id/reviews/', (req, res) => {
  review.find({ productId: req.params.id }, (err, results) => {
    res.send(results);
  }).limit(20);
});

app.get('/:id/ratings', (req, res) => {
  console.log(req.params.id);
  const match = req.params.id;
  review.aggregate([{ $match: { productId: parseInt(`${req.params.id}`) } }, { $group: { _id: '$productId', average: { $avg: '$rating' }, count: { $sum: 1 } } }], (err, result) => {
    console.log(err);
    console.log(result);
    res.send(result);
  });
});

module.exports = app;
