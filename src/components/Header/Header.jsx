import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Header.module.css";
import routes from "constants/routes";

export default function Header() {
  const history = useHistory();
  return (
    <header>
      <nav className={styles.navContainer}>
        <div className={styles.calenderTypeButtons}>
          <button
            onClick={() => history.push(routes.DAILY)}
            className={styles.dailyButton}
          >
            일간
          </button>
          <button
            onClick={() => history.push(routes.WEEKLY)}
            className={styles.weeklyButton}
          >
            주간
          </button>
        </div>
        <div className={styles.optionButtons}>
          <button
            onClick={() => history.push(routes.ADD_EVENT)}
            className={styles.addButton}
          >
            이벤트 생성
          </button>
          <button
            onClick={() => history.push(routes.PROFILE)}
            className={styles.profileButton}
          >
            프로필
          </button>
        </div>
      </nav>
    </header>
  );
}
