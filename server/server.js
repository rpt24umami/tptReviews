const express = require('express');

const app = express();
const port = 3001;
const path = require('path');

const db = require('./mongodb.js');

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.send('index.html');
});

app.get('/:id/reviews/', (req, res) => {
  db.find({productId: req.params.id}, (err, results) => {
    console.log(req.params.id);
    console.log(results, 'hello');
    res.send(results);
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});


