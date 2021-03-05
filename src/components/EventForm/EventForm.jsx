import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styles from "./EventForm.module.css";
import { setEvent, removeEvent } from "../../api";

// TODO onchange에 setState걸어놔서 사용자가 뭐 입력할때마다 리랜더링됨. 디바운스 적용하면 좋을듯?? 아닌가?
// 디바운스 짧게 안하면 submit하기전에 업데이트 안돼서 누락될수도 잇겟다.

export default function EventForm({ events, selectedEventInfo }) {
  const history = useHistory();
  const currentUrl = useLocation();
  const selectedEvent = currentUrl.pathname === "/events/new"
  ? null
  : events[selectedEventInfo.selectedEventDayIndex][selectedEventInfo.selectedEventId];

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(selectedEvent ? selectedEvent.description : "");
  const [startDateTime, setStartDateTime] = useState(selectedEvent ? selectedEvent.startDateTime : "");
  const [endDateTime, setEndDateTime] = useState(selectedEvent ? selectedEvent.endDateTime : "");
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const key = currentUrl.pathname === "/events/new" ? null : selectedEvent.uid;
    const date = startDateTime.slice(0, 10);
    const newEvent = {
      title: title,
      description: description,
      startDateTime: startDateTime,
      endDateTime: endDateTime,
    };

    // TODO err 핸들링 추가
    setEvent(newEvent, date, key).then(() => {
      history.push("/calendar");
    });
  };

  const handleClick = () => {
    const date = startDateTime.slice(0, 10);
    const key = selectedEvent.uid;

    // TODO err 핸들링 추가
    removeEvent(date, key).then(() => {
      history.push("/calendar");
    });
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.formArea}>
          <div className={styles.formItemWrapper}>
            <div className={styles.formLeftItem}>Title:</div>
            <div className={styles.formRightItem}>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
          </div>
          <div className={styles.formItemWrapper}>
            <div className={styles.formLeftItem}>Description:</div>
            <div className={styles.formRightItem}>
              <textarea
                rows="10"
                cols="30" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          </div>
          <div className={styles.formItemWrapper}>
            <div className={styles.formLeftItem}>Start</div>
            <div className={styles.formRightItem}>
              <input
                type="datetime-local" 
                value={startDateTime}
                onChange={(e) => setStartDateTime(e.target.value.slice(0,14)+"00")}
                required
              />
            </div>
          </div>
          <div className={styles.formItemWrapper}>
            <div className={styles.formLeftItem}>End</div>
            <div className={styles.formRightItem}>
              <input
                type="datetime-local" 
                value={endDateTime}
                onChange={(e) => setEndDateTime(e.target.value.slice(0,14)+"00")}
                min={startDateTime}
                max={startDateTime.slice(0,11) + "23:59"}
                required
              />
            </div>
          </div>
          <div className={styles.formButtonWrapper}>
            <p>시간은 정각 단위로 버림되어 입력됩니다. 분 단위는 입력해도 적용되지 않습니다.</p>
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
      {currentUrl.pathname === "/events/new"
      ? null
      : (
          <div className={styles.formButtonWrapper}>
            <button onClick={handleClick}>Remove</button>
          </div>
        )
      }
      
    </div>
  );
}
