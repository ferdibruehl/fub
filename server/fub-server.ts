import express = require('express');
const registration = require('./auth/registration');

const app: express.Application = express();

app.use('/test', registration);

const port = 3000;

app.listen(port, () => {
  console.log('FUB-Server is listening on port' + port);
});