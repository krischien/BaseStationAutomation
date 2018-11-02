var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

mongoose.connect('mongodb://localhost/basestation', { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error',console.error.bind(console,'connection error'));

db.once('open',function(){
	console.log('connected')
})

module.exports = router;
