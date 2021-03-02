import React from 'react';
import { Link } from 'react-router-dom';

import logo from "../../assets/logo.png";
import AppDatePicker from "../AppDatePicker";
import styles from "./AppHeader.module.css";

// TODO: Create your own header.
export default function AppHeader ({ currentDate, updateDate }) {
  return (
    <>
      <Link to="/calendar" >
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>
      <AppDatePicker currentDate={currentDate} onChangeDate={newDate => updateDate(newDate)}/>
    </>
  );
}
