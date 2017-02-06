'use strict'
const co = Promise.coroutine;
const express = require('express');
let router = express.Router();

module.exports = function (jsonParser, defaultController) {
    router.get('/', co(defaultController.defaultMethod));
    return router;
};
