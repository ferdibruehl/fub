var express = require('express');
var registration = express.Router();

// define the home page route
registration.get('/', (req: any, res: any) => {
  res.send('Birds home page');
});

// define the about route
registration.get('/a', (req: any, res: any) => {


  res.send('a');
});

module.exports = registration;