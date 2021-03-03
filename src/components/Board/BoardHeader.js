import React from "react";
import styles from "./Board.module.css";

const BoardHeader = ({ children }) => {
  return (
    <div className={styles.navigation}>
      {children}
    </div>
  );
};

export default BoardHeader;
