import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './style.css';

// TODO: Create your own header.
export default function Header() {
  return (
    <header>
      <nav>
        <ul className="menu">
          <li className="calendar-menu">
            <Link to="/calendar">Calendar</Link>
          </li>
          <li className="event-menu">
            <Link to="/event">Event</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
