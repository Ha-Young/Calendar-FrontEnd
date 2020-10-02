import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ onCalendarTypeChange }) => {
  const history = useHistory();

  const onChange = (event) => {
    switch (event.target.value) {
      case 'WEEK':
        history.push('/');
        onCalendarTypeChange('WEEK');
        break;
      case 'DAY':
        history.push('/day');
        onCalendarTypeChange('DAY');
        break;
    }
  };

  return (
    <header>
      <nav>
        <div className={styles.selector}>
          <select onChange={onChange}>
            <option value='WEEK'>WEEK</option>
            <option value='DAY'>DAY</option>
          </select>
        </div>
        <Link to='/events/new'>
          <button>add event</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
