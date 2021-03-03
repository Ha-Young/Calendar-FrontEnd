import React from "react";
import styles from "./Calendar.module.css";

export default function HoursColumn() {
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
    <div className={`${styles.HoursColumn}`}>
      {hours.map((value, index) => {
        return <div key={index}>{value}</div>;
      })}
    </div>
  );
}
