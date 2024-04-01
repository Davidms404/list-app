const { Schema, model } = require('mongoose');

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  done: {
    type: Boolean, 
    default: false
  },
  user: {
    type: String,
    required: true
  },
}, {
  timestamps: true,
  versionKey: false
});

module.exports = model('Task', TaskSchema);