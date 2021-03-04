import React from "react";
import styles from "./Board.module.css";

const BoardHeader = ({ nav, children }) => {
  return (
    <div className={styles.navigation}>
      {nav?.map((date) => (
        <div key={date} className={styles.date}>{date}</div>
      ))}
    </div>
  );
};

export default BoardHeader;
