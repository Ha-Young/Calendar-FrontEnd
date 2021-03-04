import React from "react";
import styles from "./CalendarButtons.module.scss";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

export default function CalendarButtons({ goPrev, goNext }) {
  return (
    <ul className={styles.Buttons}>
      <li className={styles.prevButton}>
        <button type="button" onClick={goPrev}>
          <HiOutlineChevronLeft className={styles.icon}/>
        </button>
      </li>
      <li className={styles.nextButton}>
        <button type="button" onClick={goNext}>
          <HiOutlineChevronRight className={styles.icon}/>
        </button>
      </li>
    </ul>
  )
}
