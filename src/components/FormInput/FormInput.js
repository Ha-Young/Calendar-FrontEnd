import React from "react";
import styles from "./FormInput.module.css";

function FormInput({ type, name, onChange, value }) {
  return (
    <input 
      className={styles.input}
      type={type}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
}

export default FormInput;
