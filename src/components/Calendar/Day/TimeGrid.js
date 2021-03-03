import React from "react";
import styles from "./Day.module.css";

export default function TimeGrid() {
  const hours = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
  ];

  return (
    <div className={`${styles.timeGrid}`}>
      {hours.map((value) => {
        return <div>{value}</div>;
      })}
    </div>
  );
}
