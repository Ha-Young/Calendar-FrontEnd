import React from 'react';
import { Link } from 'react-router-dom';

// TODO: Create your own header.
export default function Header () {
  return (
    <header>
      <nav>
        <button><Link to='/'>Home</Link></button>
        <button><Link to='/weeklycalendar'>Week</Link></button>
        <button><Link to='/dailycalendar'>Daily</Link></button>
      </nav>
    </header>
  );
}
