import React from "react";
import styles from "./Weekly.module.css";
import moment from "moment";
import TimeTable from "../TimeTable/TimeTable";

export default function Weekly ({ todayDate, eventList }) {
  const days = [];
  for (let i = 0; i < 7; i++) {
    days.push(moment(todayDate).day(i));
  }

  return (
    <div className={styles.Weekly}>
      <div className={styles.timeList}>
        <div></div>
        <div>오전 0시</div>
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
          const matchedEventList = eventList.filter((list) => {
            return list.eventDate === moment(day).format("YYYY-MM-DD");
          });

          return (
            <TimeTable
              key={index}
              todayDate={moment(day).format("YYYY-MM-DD")}
              matchedEventList={matchedEventList}
            />
          );
        })
      }
    </div>
  );
}
