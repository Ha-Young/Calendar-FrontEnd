import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as dayjs from "dayjs";
import styles from "./AppHeader.module.css";

// TODO: Create your own header.
export default function AppHeader({ onViewChange }) {
  useEffect(() => {
    onViewChange();
  }, [onViewChange]);

  return (
    <header className={styles.Header}>
      <Link to="/">
        <h1 className={styles.title}>달력</h1>
      </Link>
      <button type="text" className={styles.previous}>
        이전
      </button>
      <button type="text" className={styles.next}>
        다음
      </button>
      <h2 className={styles.month}>{`${dayjs().format("M")}월`}</h2>
      <select onChange={onViewChange}>
        <option value="하루씩 보기">하루씩 보기</option>
        <option value="일주일씩 보기">일주일씩 보기</option>
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
