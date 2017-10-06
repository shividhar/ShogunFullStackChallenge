const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

var search = require("./search");

search.setupSearch();

app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(search.search("469")));
})

app.listen(9090, function () {
  console.log('Example app listening on port 3000!')
})
