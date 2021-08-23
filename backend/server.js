// get express server
const express = require('express');
// creates new express server
const app = express();
// server port where it's going to be listening
const PORT = 3000;
const sites = require('./routes/sites');

// static routes for index
app.use('/', sites);

// starts server listening
app.listen(PORT);