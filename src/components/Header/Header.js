import React from 'react';
import { Link } from 'react-router-dom';

// TODO: Create your own header.
export default function Header () {
  return (
    <header>
      <nav>
        <ul>
          {/* <li><Link to='/'>calendar</Link></li> */}
          <Link to='/calendar'></Link>
          {/* <li><Link to='/events'>event</Link></li>
          <li><Link to='/event/:eventId'>dailyEvent</Link></li> */}
        </ul>
      </nav>
    </header>
  );
}
