const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const db = mongoose.connect('mongodb://localhost/Shoelace', { useNewUrlParser: true });

const port = process.env.PORT || 4180;
const CustomerPreference = require('./models/preference');
const preferenceRouter = require('./routes/preferenceRouter')(CustomerPreference);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', preferenceRouter);

app.get('/', (req, res) => {
  res.send('Shoelace customer preference API');
});

app.server = app.listen(port);

module.exports = app;
