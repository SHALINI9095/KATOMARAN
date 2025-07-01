// backend/models/todo.js

const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false, // Optional for now
  },
  title: {
    type: String,
    required: true, // Title is required
  },
  description: {
    type: String,
    default: '',
  },
  dueDate: {
    type: Date,
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Low',
  },
  status: {
    type: String,
    enum: ['In Progress', 'Completed'],
    default: 'In Progress',
  },
  sharedWith: {
    type: [String], // Emails
    default: [],
  }
}, { timestamps: true }); // Adds createdAt and updatedAt

module.exports = mongoose.model('Todo', TodoSchema);
