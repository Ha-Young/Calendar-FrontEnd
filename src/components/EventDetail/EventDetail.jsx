import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styles from "./EventDetail.module.css";

const EventDetail = ({ weeklyEvent, deleteEvent }) => {
  const [event, setEvent] = useState({});
  const [isInvalidEvent, setIsInvalidEvent] = useState(false);
  const param = useParams();
  const history = useHistory();

  useEffect(() => {
    if (weeklyEvent[param.eventId]) {
      setEvent(weeklyEvent[param.eventId]);
    } else {
      setIsInvalidEvent(true);
    }
  }, [weeklyEvent, param.eventId]);

  const handleDelete = () => {
    deleteEvent(param.eventId, event.date);
    history.push("/weekly");
    alert("event deleted");
  };

  return (
    <>
      {isInvalidEvent ? (
        <div className={styles.invalidMessage}>
          해당 이벤트가 존재하지 않습니다.
        </div>
      ) : (
        <>
          <section className={styles.eventContainer}>
            <h1 className={styles.title}>{event.title}</h1>
            <div className={styles.time}>
              <span className={styles.data}>
                {event.date}&nbsp;&nbsp;&nbsp;
              </span>
              <span className={styles.startTime}>{event.startTime}시 ~ </span>
              <span className={styles.endTime}>{event.endTime}시</span>
            </div>
            <p className={styles.description}>{event.description}</p>
          </section>
          <section className={styles.eventButtonContainer}>
            <button
              className={styles.editButton}
              onClick={() => history.push(`/events/edit/${param.eventId}`)}
            >
              수정
            </button>
            <button className={styles.deleteButton} onClick={handleDelete}>
              삭제
            </button>
          </section>
        </>
      )}
    </>
  );
};

export default EventDetail;
