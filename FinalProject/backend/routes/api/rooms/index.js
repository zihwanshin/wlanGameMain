var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const room = [
    {
      name: 'rooma',
      desc: 'room for game',
      lock: 'true',
      pwd:'1234a',
      limit:6,
      mem: 4
    },
    {
        name: 'roomb',
        desc: 'room for chat',
        lock: 'false',
        pwd:'',
        limit:2,
        mem: 1
      },
      {
        name: 'roomc',
        desc: 'room for game&chat',
        lock: 'true',
        pwd:'abcd1',
        limit:5,
        mem: 2
      },
  ]
  res.send({ rooms: room })
});



module.exports = router;