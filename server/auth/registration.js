"use strict";
var express = require('express');
var registration = express.Router();
// define the home page route
registration.get('/', (req, res) => {
    res.send('Birds home page');
});
// define the about route
registration.get('/a', (req, res) => {
    res.send('a');
});
module.exports = registration;
