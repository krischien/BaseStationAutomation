var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var residences = new mongoose.Schema({
	residenceName : String,
	population : Number,
	hHousehould : String,
	primaryContact : String,
	secondaryContact : String,
	address : String	
});

var Residence = mongoose.model('Residence', residences);
var result;
/* GET home page. */
router.get('/', function(req, res, next) {
  Residence.find({},function(err,data){
  	console.log(data);
  	result = data;
  });
  
  res.render('home', { output: result });
});

router.post('/', function(req, res, next) {
	console.log(req.body) 
	var post = new Residence(req.body)

   post.save(function (err, residences) {
    if (err) return console.error(err);
    console.log('Residence Saved')
  });

});

module.exports = router;
