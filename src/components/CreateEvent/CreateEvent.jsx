import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./CreateEvent.module.css";
import { saveData } from "../../api";
import { DateTime } from "luxon";

// TODO onchange에 setState걸어놔서 사용자가 뭐 입력할때마다 리랜더링됨. 디바운스 적용하면 좋을듯?? 아닌가?
// 디바운스 짧게 안하면 submit하기전에 업데이트 안돼서 누락될수도 잇겟다.

export default function CreateEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  const history = useHistory();
  console.log(startDateTime)
  console.log(DateTime.fromISO(startDateTime).plus({ days: 1 }).toISODate()+"T00:00")

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO 데이터 쏘기 전에 form에서 input validation 필요함.
    const newEvent = {
      title: title,
      description: description,
      startDateTime: startDateTime,
      endDateTime: endDateTime,
    };
    const date = startDateTime.slice(0, 10);

    // TODO err 핸들링 추가
    // TODO API 함수는 connect의 mapDispatchToProps에 올려서, helper함수로 묶어서 내려줘야 할수도 있음.
    saveData(newEvent, date).then(() => {
      history.push("/calendar");
    });
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
                max={DateTime.fromISO(startDateTime).plus({ days: 1 }).toISODate()+"T00:00"}
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
    </div>
  );
}
