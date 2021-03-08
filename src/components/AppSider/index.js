import React from "react";

import humanImg from "../../assets/human.png";
import DailyWeekDropDown from "../DailyWeekDropDown";
import styles from "./AppSider.module.css";

function AppSider({ viewOption, onChangeViewOption, user }) {
  return (
    <div className={styles.appSider}>
      <h1 className={styles.appTitle}>My Scheduler</h1>
      <figure className={styles.userInfo}>
        <img src={user ? user.photoURL : humanImg} alt="user_img" className={styles.userImg}/>
        <figcaption>{!!user && user.email}</figcaption>
      </figure>
      <div>
        <DailyWeekDropDown
          defaultKey={viewOption}
          onChange={selectKey => onChangeViewOption(selectKey)}
        />
      </div>
    </div>
  );
}

export default AppSider;
