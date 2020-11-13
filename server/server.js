const express = require('express')
const app = express()
const port = 3001
const path = require('path');

app.use(express.static(path.join(__dirname, '../dist')));


console.log(path.join(__dirname, '../dist'));
app.get('/', (req, res) => {
  res.send('index.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port} ${__dirname}`)
})