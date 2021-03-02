import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./CreateEvent.module.css";

export default function CreateEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push("/calendar/daily")
  }

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
              />
            </div>
          </div>
          <div className={styles.formItemWrapper}>
            <div className={styles.formLeftItem}>Start</div>
            <div className={styles.formRightItem}>
              <input
                type="datetime-local" 
                value={startDateTime}
                onChange={(e) => setStartDateTime(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.formItemWrapper}>
            <div className={styles.formLeftItem}>End</div>
            <div className={styles.formRightItem}>
              <input
                type="datetime-local" 
                value={endDateTime}
                onChange={(e) => setEndDateTime(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.formButtonWrapper}>
            <p>시간은 정각 단위로 버림되어 입력됩니다. 분 단위는 입력해도 적용되지 않습니다.</p>
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
