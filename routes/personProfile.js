var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var person = require('./personProfile')

var Person = mongoose.model('Person', person.personSchema);
var result;

/* GET home page. */
router.get('/', function(req, res, next) {
    Person.find({},function(err,data){
        console.log(data);
        result = data;
    });

    res.render('personProfile', { output: result });
});

module.exports = router;
