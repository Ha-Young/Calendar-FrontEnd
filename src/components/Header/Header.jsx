import React from "react";
import { Link } from "react-router-dom";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { IoMenuOutline, IoSettingsOutline } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";

export default function Header({ prevButtonClicked, nextButtonClicked }) {
  return (
    <header className={styles.wrapper}>
      <div className={styles.navItemWrapper}>
        <button className={styles.changeBtn}>
          <IoMenuOutline />
        </button>
      </div>
      <div className={styles.navItemWrapper}>
        <img className={styles.logo} src={logo} alt="logo" />
      </div>
      <div className={styles.navItemWrapper}>
        <span>캘린더</span>
      </div>
      <div className={styles.navItemWrapper}>
        <button>오늘</button>
      </div>
      <div className={styles.navButtonWrapper}>
        <button className={styles.changeBtn}>
          <MdNavigateBefore onClick={() => prevButtonClicked()} />
        </button>
      </div>
      <div className={styles.navButtonWrapper}>
        <button className={styles.changeBtn}>
          <MdNavigateNext onClick={() => nextButtonClicked()} />
        </button>
      </div>
      <div className={styles.navItemWrapper}>
        <Link to="/calendar">Calendar</Link>
      </div>
      <div className={styles.navItemWrapper}>
        <Link to="/events/new">Create Event</Link>
      </div>
    </header>
  );
}
