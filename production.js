const path = require('path');
const express = require('express');
const app = express();
const helmet = require('helmet');
const host = 'localhost';
const port = 5088;

app.use(helmet());

app.use(express.static(path.join(__dirname, './build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, host, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Instagram widget [production build] is start on ${host}:${port}`);
});
