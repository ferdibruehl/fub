"use strict";
var express = require('express');
var registration = express.Router();
registration.get('/', (req, res) => {
    const buisnessField = ['Transport', 'Metall', 'Elektro', 'asdf'];
    res.send(buisnessField);
});
registration.post('/', (req, res) => {
});
module.exports = registration;
