import React from 'react';
import './TaskList.css';

function TaskList({ tasks, onDelete }) {
  return (
    <div id="task-list">
      {tasks.length > 0 && <h3>📝 Recently Added Tasks</h3>}
      <ul>
        {tasks.map(task => (
          <li key={task._id} className="task-item">
            <div>
              <strong>{task.title}</strong>
              {task.description && <div>{task.description}</div>}
              <div style={{ fontSize: '0.85rem', color: '#555' }}>
                📅 {task.dueDate?.slice(0, 10)} | 🔖 {task.priority} | 📌 {task.status}
              </div>
            </div>
            <button className="delete-btn" onClick={() => onDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
