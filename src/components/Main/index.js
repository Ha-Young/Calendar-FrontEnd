import React from "react";
import styles from "./Main.module.css"
import TimeIndicator from "../TimeIndicator";
import Calender from "../Calender";

export default function Main() {

    return (
        <>
        <div className={styles.Main}>
          <TimeIndicator />
          <Calender />
          </div>
        </>
    )
}