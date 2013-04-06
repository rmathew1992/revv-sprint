
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.intermediate = function(req, res){
  res.render('intermediate', { title: 'Choose an option!' });
};

exports.newgoal = function(req, res){
  res.render('newgoal', { title: 'New goal!' });
};