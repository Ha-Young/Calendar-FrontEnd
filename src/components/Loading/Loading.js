import React from "react";
import styles from "./Loading.module.scss";

export default function Loading({ text }) {
  return (
    <div className={styles.Loading}>
      <div className={styles.Spinner}>
        <div className={`${styles.circle} ${styles.one}`}></div>
        <div className={`${styles.circle} ${styles.two}`}></div>
        <div className={`${styles.circle} ${styles.three}`}></div>
      </div>
      <p>{text}</p>
    </div>
  );
}
