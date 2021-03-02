import React from 'react';

import logo from "../../assets/logo.png";
import AppDatePicker from "../AppDatePicker";
import styles from "./AppHeader.module.css";

// TODO: Create your own header.
export default function AppHeader ({ currentDate, updateDate }) {
  return (
    <>
      <img src={logo} alt="logo" className={styles.logo} />
      <AppDatePicker currentDate={currentDate} onChangeDate={newDate => updateDate(newDate)}/>
    </>
  );
}
