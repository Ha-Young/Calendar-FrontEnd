import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./EventCreationButton.module.scss";

function EventCreationButton({ onClick }) {
  return (
    <Link to="/events/new">
      <button onClick={onClick} className={styles.Button}>
        이벤트 생성
      </button>
    </Link>
  );
}

EventCreationButton.propTypes = {
  onClick: PropTypes.func,
};

export default EventCreationButton;
