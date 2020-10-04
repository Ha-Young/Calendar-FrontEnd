import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { auth, database } from "../../utils/firebase";
import styles from "./EventDetails.module.css";

export default function EventDetails({ date, events }) {
  const { eventId } = useParams();
  const history = useHistory();
  const {
    title,
    description,
    startTime,
    finishTime,
  } = events[eventId];
  let [year, month, day] = date.split("-");

  if (day[0] === "0") day = day[1];

  function removeEvent(date, eventId) {
    database.ref(`${auth.currentUser.uid}/${date}/${eventId}`).remove();

    alert("일정을 지웠습니다.");

    history.push("/calendar");
  }

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
