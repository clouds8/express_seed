'use strict'
Promise = require('bluebird');
const express = require('express');
const app = express();
const config = require('./config');

//Middleware
const errorHandler = require('./middleware/error_handler');
const jsonParser = require('body-parser').json();

//Model


//init Model


//Controller
const DefaultController = require('./controller/default_controller');

//init Controller
let defaultController = new DefaultController();

//Router
const defaultRouter = require('./routes/default');

app.get('/', function (req, res) {
    res.send("hello world")
});

app.use('/default', defaultRouter(jsonParser, defaultController));

//default error handler
app.use(errorHandler);

app.listen(config.app.port, function () {
    console.log('working');
})
