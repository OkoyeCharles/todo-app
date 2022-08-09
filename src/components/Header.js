import React from 'react';
import { HiOutlineRefresh } from 'react-icons/hi';
import './Header.css';

function Header({ refreshListProps }) {
  return (
    <header className="todo__header">
      <h1>Todos</h1>
      <HiOutlineRefresh onClick={refreshListProps} />
    </header>
  );
}

export default Header;
