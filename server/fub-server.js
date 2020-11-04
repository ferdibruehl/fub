"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const registration = require('./auth/registration');
const app = express();
app.use('/test', registration);
const port = 3000;
app.listen(port, () => {
    console.log('FUB-Server is listening on port' + port);
});
