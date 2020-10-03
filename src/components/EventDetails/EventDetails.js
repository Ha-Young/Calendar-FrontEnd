import React from "react";
import { useParams } from "react-router-dom";
import styles from "./EventDetails.module.css";

export default function EventDetails({ events }) {
  const { eventId } = useParams();
  const {
    title,
    description,
    startTime,
    finishTime,
  } = events[eventId];

  return (
    <div className={styles.EventDetails}>
      <button>수정</button>
      <button>삭제</button>
      <h3>{title}</h3>
      <p>{`${startTime}부터 ${finishTime}까지`}</p>
      <p>{description}</p>
    </div>
  );
}


