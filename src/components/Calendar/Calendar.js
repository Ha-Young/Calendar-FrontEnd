import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Calendar.module.css";
import IncDecrementControlBox from "./IncDecrementControlBox";
import { increaseYear, decreaseYear, increaseMonth, decreaseMonth } from "../../actions"

export default function Calendar () {
  const dispatch = useDispatch();
  const year = useSelector(state => state.changeYear);
  const month = useSelector(state => state.changeMonth);

  return (
    <>
      <div className={styles.Calender}>
        <header className={styles.headerContainer}></header>
        <div className={styles.tableContainer}>
          <div className={styles.tableIndex}>
            <IncDecrementControlBox
              state={`${year}년`}
              dispatch={dispatch}
              decreaseAction={decreaseYear()}
              increaseAction={increaseYear()}
            />
            <IncDecrementControlBox
              state={`${month}월`}
              dispatch={dispatch}
              decreaseAction={decreaseMonth()}
              increaseAction={increaseMonth()}
            />
          </div>
          <main className={styles.monthTable}>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
          </main>
        </div>
      </div>
   </>
  );
}
