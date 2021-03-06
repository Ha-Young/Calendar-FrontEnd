import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import { PATH_CALENDAR } from "../../constants/path";
import AppDatePicker from "../AppDatePicker";
import styles from "./AppHeader.module.css";

export default function AppHeader({ currentDate, updateDate }) {
  return (
    <>
      <Link to={PATH_CALENDAR}>
        <img
          src={logo}
          alt="logo"
          className={styles.logo}
        />
      </Link>
      <AppDatePicker
        currentDate={currentDate}
        onChangeDate={newDate => updateDate(newDate)}
      />
    </>
  );
}
