import React from 'react';
import './clearCompleted.css';

function ClearCompleted({ clearAllCompletedProps }) {
  return (
    <button onClick={clearAllCompletedProps} className="todo__clearCompleted" type="button">Clear all completed</button>
  );
}

export default ClearCompleted;
