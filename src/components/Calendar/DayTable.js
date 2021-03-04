import React from "react";
import styles from "./DayTable.module.css";
import { Link } from "react-router-dom";

export default function DayTable ({ year, month, date, day, eventInfo }) {
  console.log("eventInfo")
  console.log(eventInfo);
  const time = [
    {time: "0 AM", id: "0-AM", databaseId: "id-0"},
    {time: "1 AM", id: "1-AM", databaseId: "id-1"},
    {time: "2 AM", id: "2-AM", databaseId: "id-2"},
    {time: "3 AM", id: "3-AM", databaseId: "id-3"},
    {time: "4 AM", id: "4-AM", databaseId: "id-4"},
    {time: "5 AM", id: "5-AM", databaseId: "id-5"},
    {time: "6 AM", id: "6-AM", databaseId: "id-6"},
    {time: "7 AM", id: "7-AM", databaseId: "id-7"},
    {time: "8 AM", id: "8-AM", databaseId: "id-8"},
    {time: "9 AM", id: "9-AM", databaseId: "id-9"},
    {time: "10 AM", id: "10-AM", databaseId: "id-10"},
    {time: "11 AM", id: "11-AM", databaseId: "id-11"},
    {time: "12 PM", id: "12-PM", databaseId: "id-12"},
    {time: "1 PM", id: "1-PM", databaseId: "id-13"},
    {time: "2 PM", id: "2-PM", databaseId: "id-14"},
    {time: "3 PM", id: "3-PM", databaseId: "id-15"},
    {time: "4 PM", id: "4-PM", databaseId: "id-16"},
    {time: "5 PM", id: "5-PM", databaseId: "id-17"},
    {time: "6 PM", id: "6-PM", databaseId: "id-18"},
    {time: "7 PM", id: "7-PM", databaseId: "id-19"},
    {time: "8 PM", id: "8-PM", databaseId: "id-20"},
    {time: "9 PM", id: "9-PM", databaseId: "id-21"},
    {time: "10 PM", id: "10-PM", databaseId: "id-22"},
    {time: "11 PM", id: "11-PM", databaseId: "id-23"},
  ];

  const timeTable = time.map(item  => {
    const eventDateId =`id-${year}-${month}-${date}`;
    const eventTitle = eventInfo[eventDateId]
      && eventInfo[eventDateId][item.databaseId]
      && eventInfo[eventDateId][item.databaseId]["eventTitle"];

    const eventDescription = eventInfo[eventDateId]
      && eventInfo[eventDateId][item.databaseId]
      && eventInfo[eventDateId][item.databaseId]["eventDescription"];

    let schedule = `${eventTitle} - ${eventTitle}`;

    if (!eventTitle || !eventDescription) {
      schedule = ""
    }

    return (
      <>
        <div key={item.id}>{item.time}</div>
        <div>{schedule}</div>
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
