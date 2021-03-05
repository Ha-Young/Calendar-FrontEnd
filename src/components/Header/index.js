import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css"
import CalenderModeSelector from "../CalenderModeSelector";
import Button from "../Button";
import DateControlNav from "../DateControlNav"

export default function Header () {
  return (
    <header className={styles.Header}>

    <div className={styles.NavBar}>
      <Link to="/events/new">
        <Button title="새로운 이벤트"/>
      </Link>

      <DateControlNav />
    </div>

      <div className={styles.Selector}>
        <CalenderModeSelector />
      </div>
  
    </header>
  );
}
