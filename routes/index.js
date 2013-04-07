
/*
 * GET home page.
 */


// Mondodb variables
var models = require('../models');
var Goal = models.Goal;
var Task = models.Task;

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.intermediate = function(req, res){
  res.render('intermediate', { title: 'Add a goal!' });
};

exports.newgoal = function(req, res){
  var goal_info = req.body;

  // form has been submitted (as opposed to "new goal" button pressed)
  if (Object.keys(goal_info).length > 0) {

	// save goal info to mongodb
	var goal = goal_info.Goal;
	var task = new Task({ task: goal_info.Task, duration: goal_info.Duration});
    task.save(function (err) {
      if (err)
        return console.log(err);
    });
	var tasks = [task];
	var start = [goal_info.startdateday, goal_info.startdatemonth, goal_info.startdateyear];
	var end = [goal_info.enddateday, goal_info.enddatemonth, goal_info.enddateyear];
    var new_goal = new Goal({ goal: goal, tasks: tasks, daily: goal_info.Daily, start: start, end: end});
    new_goal.save(function (err) {
      if (err)
        return console.log(err);
    });
  }

  res.render('newgoal', { title: 'Make a New goal!' });
};