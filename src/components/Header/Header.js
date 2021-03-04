import React from 'react';
import { Link } from 'react-router-dom';

// TODO: Create your own header.
function Header () {
  return (
    <header>
      <nav>
        <div>
          <button><Link to='/event'>Day</Link></button>
          <button><Link to='/event/new'>Form</Link></button>
          <button><Link to='/'>Week</Link></button>
        </div>
      </nav>
    </header>
  );
}


// <button><Link to='/event/week'>Week</Link></button>
// function mapStateToProps(state) {
//   return {
//     title: state.title,
//     content: state.content,
//     date: state.date,
//     startTime: state.startTime,
//     endTime: state.endTime,
//   };
// }

export default Header;