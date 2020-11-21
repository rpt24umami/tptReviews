const express = require('express');

const mongoose = require('mongoose');

const app = express();

const path = require('path');

const { ModuleFilenameHelpers } = require('webpack');
const { db, review, schema } = require('./mongodb.js');

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.send('index.html');
});

app.get('/:id/reviews/', (req, res) => {
  const returnObject = {};
  review.find({ productId: req.params.id }, (err, results) => {
    returnObject['reviews'] = results;
    review.find().distinct('grade', (err, grades) => {
      if (err) {
        res.send(err);
        return;
      }
      returnObject.grades = grades;
      res.send(returnObject);
    });
  }).limit(20);
});

app.get('/:id/ratings', (req, res) => {
  console.log(req.params.id);
  const match = req.params.id;
  const returnValue = [];
  review.aggregate([{ $match: { productId: parseInt(req.params.id) } }, { $group: { _id: '$productId', average: { $avg: '$rating' }, count: { $sum: 1 } } }], (err, result) => {
    if (err) {
      res.send(err);
      return;
    }
    returnValue.push(result);
    review.aggregate([{
      $project: {
        _id: 0,
        grade: 1,
        productId: 1,
      },
    }, { $match: { productId: parseInt(req.params.id) } },
    {
      $unwind: '$grade',
    }, {
      $group: {
        _id: '$grade',
        count: {
          $sum: 1,
        },
      },
    },
    ], (err, result) => {
      if (err) {
        res.send(err);
        return;
      }
      returnValue.push(result);
      review.aggregate([{ $match: { productId: parseInt(req.params.id) } },
        { $group: { _id: '$rating', count: { $sum: 1 } } },
      ], (err, result) => {
        if (err) {
          res.send(err);
          return;
        }
        returnValue.push(result);
        res.send(returnValue);
      });
    });
  });
});

module.exports = app;
