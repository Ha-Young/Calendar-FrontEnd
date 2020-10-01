import React from "react";
import styles from "./Form.module.css";

export default function Form({
  children,
  submitHandler,
  buttonDescription,
}) {
  return (
    <div className={styles.Form}>
      {children}
      <button onClick={submitHandler}>{buttonDescription}</button>
    </div>
  );
}
