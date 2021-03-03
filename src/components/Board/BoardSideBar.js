import React from "react";
import styles from "./Board.module.css";
import { hours } from "../../utils/date";

const BoardSideBar = () => {
  return (
    <div className={styles.bar}>
      {hours.map((item) => (
        <div key={item} className={styles.block}>{item}</div>
      ))}
    </div>
  );
};

export default BoardSideBar;
