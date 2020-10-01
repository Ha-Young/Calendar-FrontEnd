import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import DateChanger from 'components/DateChanger/DateChanger';
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
