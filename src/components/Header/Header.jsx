import React from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./Header.module.css";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import routes from "constants/routes";

export default function Header() {
  const history = useHistory();
  return (
    <header>
      <nav>
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
        <button
          onClick={() => history.push(routes.ADD_EVENT)}
          className={styles.addButton}
        >
          <FontAwesomeIcon
            className={(styles.prev_icon, styles.icon)}
            icon={faPlusSquare}
          />
        </button>
        <button className={styles.profileButton}>
          <Link to="/profile">Profile</Link>
        </button>
      </nav>
    </header>
  );
}
