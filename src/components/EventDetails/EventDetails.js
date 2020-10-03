import React from "react";
import { Link, useParams } from "react-router-dom";
import { removeEvent } from "../../utils/api";
import styles from "./EventDetails.module.css";

export default function EventDetails({ date, events }) {
  const { eventId } = useParams();
  const {
    title,
    description,
    startTime,
    finishTime,
  } = events[eventId];
  let [year, month, day] = date.split("-");

  if (day[0] === "0") day = day[1];

  return (
    <div className={styles.EventDetails}>
      <Link to={`/events/${eventId}/edit`}>
        <button>수정</button>
      </Link>
      <button onClick={removeEvent.bind(null, date, eventId)}>삭제</button>
      <h3>{title}</h3>
      <p>{`${year}년 ${month}월 ${day}일 ${startTime}시부터 ${finishTime}시까지`}</p>
      <p>{description}</p>
    </div>
  );
}


