import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as dayjs from "dayjs";
import styles from "./AppHeader.module.css";

// TODO: Create your own header.
export default function AppHeader({
  showDaily,
  showWeekly,
  onPreviousDateClick,
  onNextDateClick,
}) {
  function onChange(event) {
    if (event.target.value === "daily") {
      showDaily();

      return;
    }

    if (event.target.value === "weekly") {
      showWeekly();

      return;
    }
  }

  return (
    <header className={styles.Header}>
      <Link to="/">
        <h1 className={styles.title}>달력</h1>
      </Link>
      <button type="text" className={styles.previous} onClick={onPreviousDateClick}>
        이전
      </button>
      <button type="text" className={styles.next} onClick={onNextDateClick}>
        다음
      </button>
      <h2 className={styles.month}>{`${dayjs().format("M")}월`}</h2>
      <select className={styles.viewSelector} onChange={onChange}>
        <option value="daily">하루씩 보기</option>
        <option value="weekly">일주일씩 보기</option>
      </select>
      <Link to="/events/new">
        <button
          type="text"
          className={styles.create}
        >
          만들기
        </button>
      </Link>
    </header>
  );
}
