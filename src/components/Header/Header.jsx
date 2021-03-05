import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";

export default function Header({ prevButtonClicked, nextButtonClicked, selectedDate, isDailyView }) {
  const history = useHistory();

  return (
    <header className={styles.wrapper}>
      <div className={styles.sideBarToggleWrapper}>
        <button className={styles.changeBtn}>
          <IoMenuOutline />
        </button>
      </div>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
      <div className={styles.titleWrapper}>
        <span>캘린더</span>
      </div>
      <div className={styles.todayBtnWrapper}>
        <button onClick={() => history.push("/calendar")}>
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
    </header>
  );
}
