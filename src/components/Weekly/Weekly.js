import React from "react";
import styles from "./styles.module.css";
import TimeTable from "../TimeTable/TimeTable";
import moment from "moment";

export default function Weekly ({ date }) {
  const days = [];
  for (let i = 0; i < 7; i++) {
    days.push(moment(date).day(i));
  }
  return (
    <div className={styles.Weekly}>
      <div className={styles.timeList}>
        <div><h2>Time</h2></div>
        <div>오전 1시</div>
        <div>오전 2시</div>
        <div>오전 3시</div>
        <div>오전 4시</div>
        <div>오전 5시</div>
        <div>오전 6시</div>
        <div>오전 7시</div>
        <div>오전 8시</div>
        <div>오전 9시</div>
        <div>오전 10시</div>
        <div>오전 11시</div>
        <div>오후 12시</div>
        <div>오후 1시</div>
        <div>오후 2시</div>
        <div>오후 3시</div>
        <div>오후 4시</div>
        <div>오후 5시</div>
        <div>오후 6시</div>
        <div>오후 7시</div>
        <div>오후 8시</div>
        <div>오후 9시</div>
        <div>오후 10시</div>
        <div>오후 11시</div>
        <div>오후 12시</div>
      </div>
      {
        days.map((day, index) => {
          return <TimeTable key={index} date={moment(day).format("YYYY-MM-DD")} />
        })
      }
    </div>
  );
}
