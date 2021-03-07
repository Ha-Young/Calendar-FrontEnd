import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

// TODO: Create your own header.
export default function Header () {
  const [isDailyView, setIsDailyView] = useState(true);

  function handleToggleView(ev) {
    if (ev.target.textContent === "daily") {
      console.log('daily')
      setIsDailyView(true);
    } else {
      setIsDailyView(false);
    }
  }

  console.log(isDailyView, '바뀌면 렌더 한번 더');

  return (
    <header className={styles.header}>
      <nav>
        <div
          name="daily"
          onClick={handleToggleView}
          className={isDailyView ? styles.selected : null}
        >
          <Link to="/">Daily</Link>
        </div>
        <div
          name="weekly"
          onClick={handleToggleView}
          className={!isDailyView ? styles.selected : null}
        >
          <Link to="/weekly">Weekly</Link>
        </div>
      </nav>
    </header>
  );
}
