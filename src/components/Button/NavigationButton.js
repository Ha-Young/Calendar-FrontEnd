import React from "react";
import PropTypes from "prop-types";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import styles from "./NavigationButton.module.scss";

function NavigationButton({ onClick }) {
  return (
    <div className={styles.ButtonWrap}>
      <FaChevronCircleLeft
        onClick={(e) => onClick(e.target.id)}
        id="left"
        className={styles.Button}
      />
      <FaChevronCircleRight
        onClick={(e) => onClick(e.target.id)}
        id="right"
        className={styles.Button}
      />
    </div>
  );
}

NavigationButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NavigationButton;
