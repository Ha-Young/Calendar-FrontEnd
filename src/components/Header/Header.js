import React from 'react';
import { Link } from 'react-router-dom';

export default function Header () {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Calander</Link></li>
          <li><Link to='/event'>EVENTS</Link></li>
          <li><Link to='/event/new'>NEW Event</Link></li>
        </ul>
      </nav>
    </header>
  );
}
