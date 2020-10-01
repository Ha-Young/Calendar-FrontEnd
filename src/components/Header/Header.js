import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

// TODO: Create your own header.
const Header = () => {
  const history = useHistory();
  const pathName = history.location.pathname;

  const onChange = (event) => {
    switch (event.target.value) {
      case 'WEEK':
        history.push('/');
        break;
      case 'DAY':
        history.push('/day');
        break;
    }
  };

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.nextButton}>
        <button>PREV</button>
        <div><h1>1월</h1></div>
        <button>NEXT</button>
        </div>
        <div className={styles.Selector}>
          <select onChange={onChange}>
            <option value='WEEK'>{pathName === '/' ? 'WEEK' : 'DAY'}</option>
            <option value='DAY'>{pathName !== '/' ? 'WEEK' : 'DAY'}</option>
          </select>
        </div>
          <Link to='/events/new'>
            <button className={styles.AddEventButton}>add event</button>
          </Link>
      </nav>
    </header>
  );
};

export default Header;
