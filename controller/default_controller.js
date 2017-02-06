'use strict'

class DefaultController {
    constructor() {

    }

    * defaultMethod(req, res, next) {
        res.send('default');
    }
}

module.exports = DefaultController;
