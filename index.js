const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const scoreRouter = require('./score-router');

const connectionString = process.env.MONGODB_URI;

mongoose.connect(connectionString, { useNewUrlParser: true });

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/score', scoreRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).send('Something went wrong');
});

app.listen(port, () => {
  global.console.log(`Serving at port ${port}`);
});
