"use strict";
var express = require('express');
var registration = express.Router();
registration.get('/', (req, res) => {
    res.send('Birds home page');
});
registration.post('/', (req, res) => {
});
module.exports = registration;
