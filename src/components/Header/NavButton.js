import React from "react";
import styles from "./Header.module.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function NavButton ({ moveToYesterday, moveToTomorrow }) {
  return (
    <div className={styles.nav_btn_wrap}>
    <button className={styles.prev_btn} onClick={moveToYesterday}>
      <GrFormPrevious />
    </button>
    <button className={styles.next_btn} onClick={moveToTomorrow}>
      <GrFormNext />
    </button>
   </div>
  );
}
