import React from "react";
import styles from "./TimeSidebar.module.css";

function TimeSidebar() {
  const times = ["1시", "2시", "3시", "4시", "5시", "6시", 
                "7시", "8시", "9시", "10시", "11시", "12시", 
                "13시", "14시", "15시", "16시", "17시", "18시", 
                "19시", "20시", "21시", "22시", "23시"];

  return (
    <div className={styles.div} >
      {times.map((time) => {
        return (<div className={styles.time} key={time}>{time}</div>);
      })}
    </div>
  );
}

export default TimeSidebar;
