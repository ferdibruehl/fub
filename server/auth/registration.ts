var express = require('express');
var registration = express.Router();


registration.get('/', (req: any, res: any) => {
  res.send('Birds home page');
});


registration.post('/', (req: any, res: any) => {

});

module.exports = registration;