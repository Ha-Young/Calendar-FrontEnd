import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

// TODO: Create your own header.
export default function Header () {
  return (
    <header className="header">
      <span><Link exact to='/'>home</Link></span>
      <span><Link exact to='/event'>event</Link></span>
      <span>weekly Icon</span>
      <span>daily Icon</span>
      <span><Link exact to='/event/new'>추가버튼!</Link></span>
    </header>
  );
}
