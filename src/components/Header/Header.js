import React from 'react';
import { Link } from 'react-router-dom';

// TODO: Create your own header.
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Calendar</Link></li>
          <li><Link to="/events/new">New Event</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
