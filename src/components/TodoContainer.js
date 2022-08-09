import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodoList';
import './TodoContainer.css';
import ClearCompleted from './clearCompleted';

function TodoContainer() {
  const [todos, setTodos] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem('charles-todo-app');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem('charles-todo-app', JSON.stringify(todos));
  }, [todos]);

  const refreshList = () => {
    setTodos([]);
  };

  const handleChange = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      }),
    );
  };

  const delTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodoItem = (input) => {
    const newTodo = {
      id: uuidv4(),
      title: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.title = updatedTitle;
        return todo;
      }),
    );
  };

  const clearAllCompleted = () => {
    setTodos(todos.filter((todo) => todo.completed === false));
  };

  return (
    <div className="todo__container">
      <Header refreshListProps={refreshList} />
      <InputTodo addTodoProps={addTodoItem} />
      <TodosList
        todos={todos}
        handleChangeProps={handleChange}
        deleteTodoProps={delTodo}
        setUpdateProps={setUpdate}
      />
      <ClearCompleted clearAllCompletedProps={clearAllCompleted} />
    </div>
  );
}

export default TodoContainer;
