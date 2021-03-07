import React, { useState } from "react";
import styles from "./EventForm.module.css";

export default function EventForm({ selectedEvent, handleSubmit, handleRemove, currentUrl }) {
  const [title, setTitle] = useState(selectedEvent?.title ?? "");
  const [description, setDescription] = useState(selectedEvent?.description ?? "");
  const [startDateTime, setStartDateTime] = useState(selectedEvent?.startDateTime ?? "");
  const [endDateTime, setEndDateTime] = useState(selectedEvent?.endDateTime ?? "");

  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);
  const onStartDateTimeChange = (e) => setStartDateTime(e.target.value.slice(0,14)+"00");
  const onEndDateTimeChange = (e) => setEndDateTime(e.target.value.slice(0,14)+"00");

  return (
    <div className={styles.wrapper}>
      <form onSubmit={(e) => handleSubmit(e, title, description, startDateTime, endDateTime)}>
        <div className={styles.formArea}>
          <div className={styles.formItemWrapper}>
            <div className={styles.formLeftItem}>Title:</div>
            <div className={styles.formRightItem}>
              <input
                type="text"
                value={title}
                onChange={onTitleChange}
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
                onChange={onDescriptionChange}
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
                onChange={onStartDateTimeChange}
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
                onChange={onEndDateTimeChange}
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
      {currentUrl.pathname === "/events/new" && (
        <div className={styles.formButtonWrapper}>
          <button onClick={() => handleRemove(startDateTime)}>Remove</button>
        </div>
      )}
    </div>
  );
}
