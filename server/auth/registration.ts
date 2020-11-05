var express = require('express');
var registration = express.Router();


registration.get('/', (req: any, res: any) => {

  const buisnessField: Array<string> = ['Transport', 'Metall', 'Elektro', 'asdf']

  res.send(buisnessField);
});


registration.post('/', (req: any, res: any) => {

});

module.exports = registration;