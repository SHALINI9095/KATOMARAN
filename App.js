import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const [lastTask, setLastTask] = useState(null);

  const addTask = async (newTask) => {
    console.log("📤 Sending to backend:", newTask);

    try {
      const res = await fetch('http://localhost:5000/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask),
      });

      const saved = await res.json();
      console.log("✅ Task saved:", saved);
      setLastTask(saved);
    } catch (err) {
      console.error('❌ Failed to add task:', err);
    }
  };

  return (
    <div className="app-container">
      <h1>✅ Add Task</h1>
      <TaskForm onAdd={addTask} />

      {lastTask && (
        <div className="task-preview">
          <h3>🆕 Last Added Task</h3>
          <p><strong>Title:</strong> {lastTask.title}</p>
          {lastTask.description && <p><strong>Description:</strong> {lastTask.description}</p>}
          {lastTask.dueDate && <p><strong>Due Date:</strong> {lastTask.dueDate.slice(0, 10)}</p>}
          <p><strong>Priority:</strong> {lastTask.priority} | <strong>Status:</strong> {lastTask.status}</p>
        </div>
      )}
    </div>
  );
}

export default App;
