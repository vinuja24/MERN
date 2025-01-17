import React, { useState } from "react";
import "./Styles.css";
export default function Todo() {
    const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTask = () => {
    if (!newTask.trim()) return; 
    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = newTask;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, newTask]);
    }
    setNewTask("");
  };

  const handleEditTask = (index) => {
    setNewTask(tasks[index]);
    setEditIndex(index);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  return (
    <div className="app">
    <h1>Todo List</h1>
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>
        {editIndex !== null ? "Update" : "Add"}
      </button>
    </div>
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className="task-item">
          <span>{task}</span>
          <div>
            <button className="edit-btn" onClick={() => handleEditTask(index)}>
              Edit
            </button>
            <button
              className="delete-btn"
              onClick={() => handleDeleteTask(index)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
  )
}
