import React from "react";
import styles from "./DayTable.module.css";
import { Link } from "react-router-dom";

export default function DayTable ({ eventInfo }) {
  console.log("hello")
  console.log(eventInfo)
  const time = [
    {time: "0 AM", id: "0-AM"},
    {time: "1 AM", id: "1-AM"},
    {time: "2 AM", id: "2-AM"},
    {time: "3 AM", id: "3-AM"},
    {time: "4 AM", id: "4-AM"},
    {time: "5 AM", id: "5-AM"},
    {time: "6 AM", id: "6-AM"},
    {time: "7 AM", id: "7-AM"},
    {time: "8 AM", id: "8-AM"},
    {time: "9 AM", id: "9-AM"},
    {time: "11 AM", id: "11-AM"},
    {time: "12 PM", id: "12-PM"},
    {time: "1 PM", id: "1-PM"},
    {time: "2 PM", id: "2-PM"},
    {time: "3 PM", id: "3-PM"},
    {time: "4 PM", id: "4-PM"},
    {time: "5 PM", id: "5-PM"},
    {time: "6 PM", id: "6-PM"},
    {time: "7 PM", id: "7-PM"},
    {time: "8 PM", id: "8-PM"},
    {time: "9 PM", id: "9-PM"},
    {time: "10 PM", id: "10-PM"},
    {time: "11 PM", id: "11-PM"},
  ];

  const timeTable = time.map(item  => {
    return (
      <>
        <div key={item.id}>{item.time}</div>
        <div> {eventInfo[0]} </div>
      </>
    );
  });

  return (
    <Link to='/event' className={styles.link}>
      <div className={styles.DayTable}>
        {timeTable}
      </div>
    </Link>
  );
}
