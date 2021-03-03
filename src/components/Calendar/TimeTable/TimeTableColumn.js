import React from "react";
import styles from "./TimeTableColumn.module.css"

export default function TimeTable() {
  const cells = [];
  for (let i = 0; i < 24; i++) {
    cells.push(i);
  }

  return (
    <div className={styles.Column}>
      {cells.map((val, i) => {
        return (<div 
          className={styles.Cell}
          key={i}
        />);
      })}
    </div>
  );
}