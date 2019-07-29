'use strict';
var mongoose = require('mongoose'),
  Task = mongoose.model('flight');

exports.list_all_tasks = function(req, res) { 
  /*Task.find({}, function(err, task) {    
    if (err)
      res.send(err);
     console.log(task);
    res.json(task);
  });*/
    Task.find({}, function(err, result) {
      if (err) throw err;
      console.log('i m in function');
      console.log(result);
    
    });

};

exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {
  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Data successfully deleted' });
  });
};
