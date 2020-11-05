import express = require('express');
import core = require('core');
import bodyParser = require('body-parser');

const registration = require('./auth/registration');

const app: express.Application = express();

app.use('/registration', registration);

const port = 3000;

app.listen(port, () => {
  console.log('FUB-Server is listening on port' + port);
});