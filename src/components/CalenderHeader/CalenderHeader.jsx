import React from "react";
import { DIRECTION } from "constants/constants";
import styles from "./CalenderHeader.module.css";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CalenderHeader = ({ onMovePrevOrNext, currentPeriod }) => {
  return (
    <section className={styles.headerContainer}>
      <FontAwesomeIcon
        onClick={() => onMovePrevOrNext(DIRECTION.PREV)}
        className={(styles.prev_icon, styles.icon)}
        icon={faChevronCircleLeft}
      />
      <span className={styles.currentPeriod}>{currentPeriod}</span>
      <FontAwesomeIcon
        onClick={() => onMovePrevOrNext(DIRECTION.NEXT)}
        className={(styles.next_icon, styles.icon)}
        icon={faChevronCircleRight}
      />
    </section>
  );
};

export default CalenderHeader;
