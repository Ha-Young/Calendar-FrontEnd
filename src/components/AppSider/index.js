import React from "react";

import humanImg from "../../assets/human.png";
import DailyWeekDropDown from "../DailyWeekDropDown";
import styles from "./AppSider.module.css";

function AppSider({ viewOption, updateViewOption }) {
  return (
    <div className={styles.appSider}>
      <h1 className={styles.appTitle}>My Scheduler</h1>
      <figure className={styles.userInfo}>
        <img src={humanImg} alt="user" className={styles.userImg}/>
        <figcaption>hahayoung@naver.com</figcaption>
      </figure>
      <div>
        <DailyWeekDropDown
          defaultKey={viewOption}
          onChange={selectKey => updateViewOption(selectKey)}
        />
      </div>
    </div>
  );
}

export default AppSider;
