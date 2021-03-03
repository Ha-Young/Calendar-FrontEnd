import React from "react";
import styles from "./Bar.module.css";

const Bar = ({ content }) => {
  return (
    <div className={styles.wrapper}>
      {content?.map((item) => (
        <div className={styles.block} value={item}></div>
      ))}
    </div>
  );
};

export default Bar;
