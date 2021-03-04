import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styles from "./EventDetail.module.css";

const EventDetail = ({ weeklyEvent }) => {
  const param = useParams();
  const history = useHistory();
  const { title, description, date, startTime, endTime } = weeklyEvent[
    param.eventId
  ];

  return (
    <>
      <section className={styles.eventDetail}>
        <h1>제목 : {title}</h1>
        <p>날짜 : {date}</p>
        <p>시작시간 : {startTime}시</p>
        <p>종료시간 : {endTime}시</p>
        <p>내용 : {description}</p>
      </section>
      <button onClick={() => history.push(`/events/edit/${param.eventId}`)}>
        수정
      </button>
    </>
  );
};

export default EventDetail;
