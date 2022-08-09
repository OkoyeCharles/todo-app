import React, { useState } from 'react';
import { AiOutlineEnter } from 'react-icons/ai';
import './InputTodo.css';

function InputTodo({ addTodoProps }) {
  const [input, setInput] = useState('');

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim()) {
      addTodoProps(input);
      setInput('');
    } else {
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form__todo">
      <input id="todo-input" type="text" placeholder="Add to your list..." value={input} onChange={handleInput} className="input__todo" />
      <button type="submit" className="submit__todo"><AiOutlineEnter /></button>
    </form>
  );
}

export default InputTodo;
