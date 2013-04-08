
/*
 * GET home page.
 */


// Mondodb variables
var models = require('../models');
var Goal = models.Goal;
var Task = models.Task;

exports.index = function(req, res){
  // get goals from db
  var exists =  Goal.find({}).populate('tasks').exec(function (err, docs) {
    // console.log(docs);

    // at least one goal already created
    if (docs.length>0) {

      // extract goal
      for (var i in docs){
        var goal_dict = docs[i];
        var goal = docs.goal;
      }
    }
    res.render('index', { goals: docs, title: 'Life Goal Planner' });
  });
};

exports.intermediate = function(req, res){
  res.render('intermediate', { title: 'Add a goal!' });
};

exports.savegoal = function(req, res){
  var goal_info = req.body;
  console.log("goal_info", goal_info);
  if (Object.keys(goal_info).length > 1) {
    console.log("form submitted");
    // save goal info to mongodb
    var goal = goal_info.Goal;
    if (goal_info.Duration.length == 0) {
      var task = new Task({ task: goal_info.Task, duration: goal_info.Duration})
      task.save(function (err) {
        if (err)
          return console.log(err);
      });
      var tasks = [task];
    }
    else {
      var tasks = [];
      for (var i in goal_info.Task) {
        var task = new Task({ task: goal_info.Task[i], duration: goal_info.Duration[i]})
        task.save(function (err) {
          if (err)
            return console.log(err);
        });
        tasks.push(task);
      }
    }
    var start = [goal_info.startdateday, goal_info.startdatemonth, goal_info.startdateyear];
    var end = [goal_info.enddateday, goal_info.enddatemonth, goal_info.enddateyear];
    var new_goal = new Goal({ goal: goal, tasks: tasks, daily: goal_info.Daily, start: start, end: end});
    new_goal.save(function (err) {
      if (err)
        return console.log(err);
    });
  }
  res.redirect('/');
}

exports.newgoal = function(req, res){
  console.log("new goal");
  res.render('newgoal', { title: 'Make a New goal!' });
};


exports.presetgoal = function(req, res){
  var goal = req.body.presetgoal;
  console.log("presetgoal", goal);
  var tasks = {};
  if (goal=='Apply to Grad School'){
    tasks['Register for the GRE'] = '10 minutes';
    tasks['Study for the GRE'] = '1 month';
    tasks['Take the GRE'] = '5 hours';
    tasks['Ask for Recommendation Letters'] = '1 hour';
    tasks['Make a CV'] = '1 week';
    tasks['Write the Statement of Purpose'] = '1 month';
    tasks['Order GRE Scores'] = '30 minutes';
    tasks['Order Transcripts'] = '2 hours';
    tasks['Submit Applications'] = '3 weeks';
    var Daily = 'Study vocabulary, read challenging articles, research schools and professors';
  }  
  else if (goal=='Get a Drivers License'){
    tasks['Take online course'] = '1 month';
    tasks['Take the permit test'] = '1 hour';
    tasks['Take driving class'] = '6 hours';
    tasks['Practice driving'] = '50 hours';
    tasks['Taking driving test'] = '1 hour';
    var Daily = 'Watch parents drive, study for permit test, practice, practice, practice!';
  }
  else if (goal=='Find a Job'){
    tasks['Make a resume'] = '1 week';
    tasks['Write cover letters'] = '1 day';
    tasks['Submit online applications'] = '2 hours';
    tasks['Go to a career fair'] = '1 day';
    var Daily = 'Research companies with job openings, follow up with interviewers';
  }
  else if (goal=='Find a Job'){
    tasks['Make a resume'] = '1 week';
    tasks['Write cover letters'] = '1 day';
    tasks['Submit online applications'] = '2 hours';
    tasks['Go to a career fair'] = '1 day';
    var Daily = 'Research companies with job openings, follow up with interviewers';
  }
  res.render('editgoal', { goal:goal, tasks:tasks, Daily:Daily, title:'Make a New goal!' });
};