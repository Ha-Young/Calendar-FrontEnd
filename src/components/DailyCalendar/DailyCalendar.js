import React, { useState, useEffect } from "react";
import { Route, Link, useParams } from 'react-router-dom';
import styles from "./DailyCalendar.module.css";

const DailyCalendar = ({
  shownDate,
  onTimeTableEntryClick,
  allEvent
}) => {
  const timeTable = Array(24).fill(0);

  const [eventId, setEventId] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');


  const onClick = (event) => {
    onTimeTableEntryClick(event);
  }
  let startTimeIndex;
  let endTimeIndex;

  for (let i = 0; i < allEvent.length; i++) {
    const eventDate = allEvent[i].eventDate.slice(0, 10);
    console.log(eventDate);
    if (eventDate === shownDate.date) {
      startTimeIndex = allEvent[i].startTime.slice(0, 2);
      endTimeIndex = allEvent[i].endTime.slice(0, 2);

      console.log(i, "start", Number(startTimeIndex), "end", endTimeIndex);

    }
  }



  return (
    <div className={styles.DailyCalendar}>
      {
        timeTable.map((cur, index) => {
          let isOddIndex = true;
          let isEventIndex = false;

          if (index % 2 === 0) {
            isOddIndex = false;
          }

          if (startTimeIndex <= index && index <= endTimeIndex) {
            isEventIndex = true;
          }

          return (
            <Link to="/event">
              <div
                key={index}
                className={
                  isEventIndex ? styles.event : (isOddIndex ? styles.odd : styles.even)
                }
                name={index}
                value={isEventIndex ? title : null}
                onClick={onClick}>
                {index}:00
              </div>
            </Link>
          );
        })
      }
    </div >
  )
}

export default DailyCalendar;
