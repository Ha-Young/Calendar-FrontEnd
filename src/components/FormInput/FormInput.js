import React from "react";
import styles from "./FormInput.module.css";

function FormInput(props) {
  const {type, name, onChange} = props;
  return (
    <input 
      className={styles.input}
      type={type}
      name={name}
      onChange={onChange}
    />
  );
}

export default FormInput;
