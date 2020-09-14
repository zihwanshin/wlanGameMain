var express = require('express');
var router = express.Router();
const path =require("path");
var roomsRouter = require('./rooms');

router.use('/rooms', roomsRouter);

router.get('/', function(req, res, next) {
  res.send('나는 api입니다.');
});

router.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../../public','index.html'));
});


module.exports = router;