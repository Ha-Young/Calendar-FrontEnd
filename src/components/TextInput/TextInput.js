import React from "react";
import styles from "./TextInput.module.css";

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
