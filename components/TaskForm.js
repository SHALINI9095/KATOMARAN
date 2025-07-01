import React, { useState } from 'react';
import './TaskForm.css';

function TaskForm({ onAdd }) {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'Low',
    status: 'In Progress',
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("🧾 Submitting task:", task);
    onAdd(task);
    setTask({
      title: '',
      description: '',
      dueDate: '',
      priority: 'Low',
      status: 'In Progress',
    });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input name="title" value={task.title} onChange={handleChange} placeholder="Title" required />
      <input name="description" value={task.description} onChange={handleChange} placeholder="Description" />
      <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} />
      <select name="priority" value={task.priority} onChange={handleChange}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <select name="status" value={task.status} onChange={handleChange}>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
