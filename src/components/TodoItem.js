import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

function TodoItem({
  key: id,
  title,
  completed,
  handleChangeProps,
  deleteTodoProps,
  setUpdateProps,
}) {
  const [editing, setEditing] = useState(false);

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const completedStyle = {
    color: '#999',
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setEditing(!editing);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(!editing);
    }
  };

  return (
    <li key={id}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleChangeProps}
        />
        <span style={completed ? completedStyle : null}>{title}</span>
        <button type="button" onClick={deleteTodoProps}><FaTrash /></button>
      </div>
      <input
        type="text"
        style={editMode}
        className="todo__edit"
        value={title}
        onChange={setUpdateProps}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
}

export default TodoItem;
