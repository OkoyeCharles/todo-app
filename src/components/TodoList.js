import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodosList({
  todos, handleChangeProps, deleteTodoProps, setUpdateProps,
}) {
  return (
    <ul className="todo__list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
          handleChangeProps={() => handleChangeProps(todo.id)}
          deleteTodoProps={() => deleteTodoProps(todo.id)}
          setUpdateProps={(e) => { setUpdateProps(e.target.value, todo.id); }}
        />
      ))}
    </ul>
  );
}

export default TodosList;
