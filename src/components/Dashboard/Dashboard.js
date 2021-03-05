import React from "react";
import styles from "./Dashboard.module.css";

export default function Dashboard({ main, login }) {
  return (
    <div className={styles.container}>
      <div className={styles.leftSideBar}>
        <div className={styles.userInfo}>
          {login}
        </div>
        <div className={styles.eventsInfo}>
        </div>
        <div className={styles.miniCalander}>
        </div>
      </div>
      <main className={styles.main}>
        {main}
      </main>
    </div>
  )
}
