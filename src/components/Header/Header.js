import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const HeadLeft = styled.div`

`;



// TODO: Create your own header.
export default function Header() {
  return (
    <header style={{border: "3px solid blue"}}>
      <nav>
        <ul>
          <li><Link to='/' exact>calendar-home</Link></li>
          <li><Link to='/event'>event</Link></li>
          <li><Link to='/calendar'>calendar</Link></li>
        </ul>
      </nav>
    </header>
  );
}
