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
  if(payload.zen){
    const repo = payload.repository.name;
    cmd.get(`
      forever stop 1
      cd ~/${repo}/client
      git pull
      yarn install
      yarn build
      cd ..
      yarn install
      forever start server.js
    `, function(err,data,stderr){
      if(err) console.log(err);
      console.log(data);
    })
  }
  res.send('all good here');
});

app.get('/force/reset/server/:id',(req,res)=>{
  cmd.get(`
    forever stopall
    forever start -c "yarn start" ~/${req.params.id}
  `,function(err,data,stderr){
    if(err) console.log(err);
    console.log(data);
  });
  res.send('reset');
})

app.get('/github', (req, res) => res.send('all good blah'));

app.listen(port, () => console.log('app started on port ' + port));

function resetServer(req) {
  
}