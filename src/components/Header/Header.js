import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './Header.module.css';

// TODO: Create your own header.
function Header({ onChange }) {
  function handleChange({ target }) {
    if (target.value === 'Week') {
      return onChange(true);
    }
    onChange(false);
  }

  return (
    <header className={styles.Header}>
      <nav>
      <div>
        <select name='weekly-select' id='weekly-select' onChange={handleChange}>
          <option value='day'>Day</option>
          <option value='Week'>Week</option>
        </select>
      </div>
        <ul>
          <li><Link to='/event/new'>Make Event</Link></li>
        </ul>
      </nav>
    </header>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange(value) {
      dispatch({ type: 'CHANGE_CALENDAR_VIEW_MODE', payload: { isWeeklyMode: value } });
    }
  };
};

export default connect(null, mapDispatchToProps)(Header);
