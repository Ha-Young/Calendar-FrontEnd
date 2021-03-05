import React from 'react';
import { Link } from 'react-router-dom';

export default function Header () {
  return (
    <header>
      <nav>
        <button><Link to='/'>Home</Link></button>
        <button style={{margin: '0 15px'}}><Link to='/weeklycalendar'>Week</Link></button>
        <button><Link to='/dailycalendar'>Daily</Link></button>
      </nav>
    </header>
  );
}
