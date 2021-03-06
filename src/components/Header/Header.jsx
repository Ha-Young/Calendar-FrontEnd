import React from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";

export default function Header({
  prevButtonClicked,
  nextButtonClicked,
  toggleCalendarView,
  selectedDate,
  isDailyView,
  handleClick
}) {
  return (
    <header className={styles.wrapper}>
      <div className={styles.leftHeaderWrapper}>
        <div className={styles.sideBarToggleWrapper}>
          <button className={styles.changeBtn}>
            <svg focusable="false" viewBox="0 0 24 24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
          </button>
        </div>
        <div className={styles.logoWrapper}>
          <img className={styles.logo} src={logo} alt="logo" />
        </div>
        <div className={styles.titleWrapper}>
          <span>캘린더</span>
        </div>
        <div className={styles.todayBtnWrapper}>
          <button onClick={handleClick}>
            <span>오늘</span>
          </button>
        </div>
        <div className={styles.prevButtonWrapper}>
          <button className={styles.changeBtn}>
            <MdNavigateBefore onClick={() => prevButtonClicked()} />
          </button>
        </div>
        <div className={styles.navButtonWrapper}>
          <button className={styles.changeBtn}>
            <MdNavigateNext onClick={() => nextButtonClicked()} />
          </button>
        </div>
        <div className={styles.selectedDateWrapper}>
          <span>
            {isDailyView ? selectedDate.toFormat("yyyy'년' L'월' d'일") : selectedDate.toFormat("yyyy'년' L'월'")}
          </span>
        </div>
      </div>
      <div className={styles.rightHeaderWrapper}>
        <select
          className={styles.viewSelector}
          name="isDaily"
          onChange={(e) => toggleCalendarView(e.target.value)}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>
      </div>
    </header>
  );
}
