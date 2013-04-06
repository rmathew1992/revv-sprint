
/*
 * GET home page.
 */


// Mondodb variables
var models = require('../models');
var Goal = models.Goal;

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.intermediate = function(req, res){
  res.render('intermediate', { title: 'Add a goal!' });
};

exports.newgoal = function(req, res){
  console.log(req.body);
  res.render('newgoal', { title: 'Make a New goal!' });
};