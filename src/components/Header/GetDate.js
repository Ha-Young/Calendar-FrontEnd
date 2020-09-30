import React from 'react';
import styles from './Header.module.css';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import format from 'date-fns/format'
import addDays from "date-fns/addDays";
import subDays from 'date-fns/subDays';

export default function GetDate ({
  yesterday,
  tomorrow,
  handleYesterday,
  handleTomorrow,
}) {

  console.log(yesterday, "yesterday")
  console.log(tomorrow, "tomorrow")

  return (
    <div className={styles.date}>
      <div className={styles.nav_btn_wrap}>
        <button className={styles.prev_btn} onClick={handleYesterday}><GrFormPrevious /></button>
        <button className={styles.next_btn} onClick={handleTomorrow}><GrFormNext /></button>
      </div>

      <div>
        <span className={styles.year}>{yesterday}</span>
        <span className={styles.month}>{tomorrow}</span>
      </div>
      <div className={styles.day}>{tomorrow}</div>

    </div>
  );
}

// let getYear = "";
  // let getMonth = "";
  // let getDay = "";
  // let today = new Date();

  // getYear = format(today, "yyyy");
  // getMonth = format(today, "MMM");
  // getDay = format(today, "do")


  // const handleNextDay = () => {
  //   console.log(getDay)
  //   let addDay = addDays(today, 1);
  //   getDay = format(addDay, "do");
  //   today = addDays(today, 1);
  // }

  // const handlePrevDay = () => {
  //   console.log(getDay)
  //   let subDay = subDays(today, 1)
  //   getDay = format(subDay, "do");
  //   today = subDays(today, 1)
  // }