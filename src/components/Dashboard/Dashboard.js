import React from "react";
import styles from "./Dashboard.module.css";

export default function Dashboard({ main, login, events}) {
  return (
    <div className={styles.container}>
      <div className={styles.leftSideBar}>
        <div className={styles.login}>
          {login}
        </div>
        <div className={styles.info}>
          Hello!
        </div>
        <div className={styles.events}>
          <div className={styles.text}>EVENTS</div>
          {events}
        </div>
      </div>
      <main className={styles.main}>
        {main}
      </main>
    </div>
  );
}
