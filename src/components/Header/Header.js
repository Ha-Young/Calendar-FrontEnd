import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./Header.module.css";

function Header ({ isDay, toggleDay }) {
  const viewType = isDay ? "일간" : "주간";

  function handleClick() {
    toggleDay();
  }

  return (
    <header className={styles.Header}>
      <nav>
        <ul>
          <Link to="/calendar">
            <button>달력</button>
          </Link>
          <Link to="/events">
            <button>글쓰기</button>
          </Link>
        </ul>
      </nav>
      <button onClick={handleClick}>{viewType}</button>
    </header>
  );
}

export default Header;
