const express = require('express');
const bodyParser = require('body-parser');
const cmd = require('node-cmd');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = 3001;

app.post('/github', (req, res) => {
  const payload = JSON.parse(req.body.payload);
  console.log(payload.zen);
  res.send('all good here');
});

app.get('/github', (req, res) => res.send('all good blah'));

app.listen(port, () => console.log('app started on port ' + port));
