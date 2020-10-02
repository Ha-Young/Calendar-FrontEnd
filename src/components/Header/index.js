import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from '../styled';

export default function Header () {
  return (
    <Styled.Header>
      <header>
        <nav>
          <ul>
            <li><Link to='/main'>Calendar</Link></li>
            <li><Link to='/event'>Register Event</Link></li>
          </ul>
        </nav>
      </header>
    </Styled.Header>
  );
}
