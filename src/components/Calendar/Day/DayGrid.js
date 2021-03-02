import React from "react";
import styles from "./Day.module.css";
import DayCell from "./DayCell";

export default function DayGrid() {
  const hours = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
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
    <div className={`${styles.boardWrapper}`}>
      {hours.map((value, index) => {
        return <DayCell value={value} key={index} />;
      })}
    </div>
  );
}
