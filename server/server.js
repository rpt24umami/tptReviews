const express = require('express')
const app = express()
const port = 3001
const path = require('path');
const db = require('./db.js')
app.use(express.static(path.join(__dirname, '../dist')));



app.get('/', (req, res) => {
  res.send('index.html')
})

app.get('/reviews', (req,res) => {
  db.query('select * from reviews LIMIT 10', (err, results) => {
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

db.query('select * from reviews LIMIT 10', (err, results) => {
  console.log(results);
});