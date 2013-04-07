var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/goalplanner');

var taskSchema = mongoose.Schema({
  task: String,
  duration: String
});

var Task = mongoose.model('Task', taskSchema);

var goalSchema = mongoose.Schema({
  goal: String,
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  daily: String,
  start: [String],
  end: [String]
});

var Goal = mongoose.model('Goal', goalSchema);

module.exports.Goal = Goal;
module.exports.Task = Task;
