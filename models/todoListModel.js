'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  start: {
    type: String   
  },
  end: {
    type: String   
  }, 
  start_place: {
    type: String   
  },
  end_place: {
    type: String   
  },
  start_time:{
    type: String   
  },
  end_time: {
    type: String   
  },
  flight_time: {
    type: String   
  }, 
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['Incomplete', 'Ready to File', 'Approved','Rejected']
    }],
    default: ['Pending']
  }
});

module.exports = mongoose.model('flight', TaskSchema);