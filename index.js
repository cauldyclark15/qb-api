require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/initialize', function(req, res) {
  res.json({ message: 'initialize' });
});

app.post('/authenticate', function(req, res) {
  res.json({ message: 'authenticate' });
});

const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Application listening at http://${host}:${port}`);
});
