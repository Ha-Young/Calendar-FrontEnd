import React from "react";
import styles from "./TextInput.module.css";
import PropTypes from "prop-types";

const TextInput = ({ name, onChange, value }) => {
  return (
    <input
      className={styles.input}
      name={name}
      type="text"
      onChange={onChange}
      value={value}
    />
  );
};

export default TextInput;

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
