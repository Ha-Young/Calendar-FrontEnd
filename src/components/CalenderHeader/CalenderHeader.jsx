import React from "react";
import { directionConst } from "constants/constants";
import styles from "./CalenderHeader.module.css";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CalenderHeader = ({ onClick, currentPeriod }) => {
  return (
    <section className={styles.headerContainer}>
      <FontAwesomeIcon
        onClick={() => onClick(directionConst.PREV)}
        className={(styles.prev_icon, styles.icon)}
        icon={faChevronCircleLeft}
      />
      <span className={styles.currentPeriod}>{currentPeriod}</span>
      <FontAwesomeIcon
        onClick={() => onClick(directionConst.NEXT)}
        className={(styles.next_icon, styles.icon)}
        icon={faChevronCircleRight}
      />
    </section>
  );
};

export default CalenderHeader;
