import React from 'react';
import { Link, Switch } from 'react-router-dom';
import Calendar from '../Calendar/Calendar';
import Event from "../Event/Event";
import './style.css';

// TODO: Create your own header.
export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/event">Event</Link></li>
        </ul>
      </nav>
    </header>
  );
}
