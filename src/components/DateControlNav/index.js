
import React from "react";
import styles from "./DateContorlNav.module.css";
import Button from "../Button";


export default function DateContorlNav() {

    return (
      <div className={styles.DateControlNav}>
          <Button title="prev" ></Button>
          <Button title="next"></Button>
           {/* { calendarMode === CALENDAR_MODE.DAILY ? <span>{displayingDate.substr(0, 10)}</span> : <span>{`${moment(displayingDate).weeks()}th week!`}</span> } */}
      </div>
    )
}

