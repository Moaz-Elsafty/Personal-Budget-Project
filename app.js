const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('error-handler');
const cors = require('cors');


//handle CORS requests
app.use(cors());

//Clarifies more information about the requests.
app.use(morgan('dev'));

//body parser middleware for parsing request bodies
app.use(bodyParser.json());

//mounting apiRouter with './api' path
const apiRouter = require('./server/api');
app.use('/api', apiRouter);


app.use(errorHandler);

module.exports = app;