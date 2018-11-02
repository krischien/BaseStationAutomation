var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
	firstName : String,
	middleName : Number,
	lastName : String,
	bDate : String,
	age : Number,
	bloodType : String,
	contactNo : String,
	occupation : Number,
	tin : String,
	sss : String,
	philHealth : String,
	religion : String,
	address : String
});

var Person = mongoose.model('Person', personSchema);
var result;
/* GET home page. */
router.get('/', function(req, res, next) {
  Person.find({},function(err,data){
  	console.log(data);
  	result = data;
  });  
  
  res.render('person', { output: result });
});

router.post('/', function(req, res, next) {
	console.log(req.body) 
	var post = new Person(req.body)

   post.save(function (err, residences) {
    if (err) return console.error(err);
    console.log('Person Saved')
  });

});
module.exports = router;
