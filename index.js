const express = require('express');
const bodyParser = require('body-parser');
const cmd = require('node-cmd');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = 3001;

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('all good here');
});

app.listen(port, () => console.log('app started on port ' + port));
