import React from 'react';
import { Link } from 'react-router-dom';

// TODO: Create your own header.
export default function Header () {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>월</Link></li>
          <li><Link to='/event'></Link></li>
        </ul>
      </nav>
    </header>
  );
}
