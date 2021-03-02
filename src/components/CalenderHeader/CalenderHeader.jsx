import React from "react";
import { directionConst } from "constants/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./CalenderHeader.module.css";

const WeeklyHeader = ({ onClick, currentPage }) => {
  return (
    <section className={styles.headerContainer}>
      <FontAwesomeIcon
        onClick={() => onClick(directionConst.PREV)}
        className={(styles.prev_icon, styles.icon)}
        icon={faChevronCircleLeft}
      />
      <span className={styles.currentState}>{currentPage}</span>
      <FontAwesomeIcon
        onClick={() => onClick(directionConst.NEXT)}
        className={(styles.next_icon, styles.icon)}
        icon={faChevronCircleRight}
      />
    </section>
  );
};

export default WeeklyHeader;
