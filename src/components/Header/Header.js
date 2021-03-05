import React from 'react';
import { Link } from 'react-router-dom';

// TODO: Create your own header.
function Header () {
  return (
    <header>
      <nav>
        <div>
          <button><Link to='/calendar'>Day</Link></button>
          <button><Link to='/event/new'>Form</Link></button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
