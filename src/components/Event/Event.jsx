import React, { useState } from "react";
import styles from "./Event.module.css";

export default function Event() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  // 이 쪽 컴포넌트에서 리덕스로 데이터 관리
  return (
    <div>
      <div className={styles["date-boxs"]}>
        <form
          // name="profile"
          // action="https://calendar-viewer-a72b6-default-rtdb.firebaseio.com/"
          // method="post"
        >
          <p>시작 시간</p>
          <input type="datetime-local" name="start-date" />
          <p>종료 시간</p>
          <input type="datetime-local" name="end-date" />
          <p>이벤트 제목</p>
          <input type="text" />
          <p>이벤트 내용 작성</p>
          <input className={styles["text-box"]} type="text" />
          <input className={styles.submit} type="submit" value="제출" />
        </form>
      </div>
    </div>
  );
}
