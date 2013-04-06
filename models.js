var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/goalplanner');

var goalSchema = mongoose.Schema({
  goal: String,
  tasks: [String],
  daily: [String],
  start: [Number],
  end: [Number]
});

var Goal = mongoose.model('Goal', goalSchema);

module.exports.Goal = Goal;
