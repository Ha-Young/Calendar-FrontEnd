import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Header.module.css';
import Auth from '../Auth/Auth';

// TODO: Create your own header.
export default function Header() {
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
    <header>
      <Auth />
      <nav>
        <button>PREV</button>
        <button>NEXT</button>
        <div className={styles.Selector}>
          <select onChange={onChange}>
            <option value='WEEK'>{pathName === '/' ? 'WEEK' : 'DAY'}</option>
            <option value='DAY'>{pathName !== '/' ? 'WEEK' : 'DAY'}</option>
          </select>
        </div>
      </nav>
    </header>
  );
}
