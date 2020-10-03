import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

export default function Button ({ title, onClick }) {
  return (
    <button
      className={styles.Button}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
