import React from "react";
import styles from "./Form.module.css";

export default function Form({
  children,
  submitHandler,
  value,
}) {
  return (
    <div className={styles.Form}>
      {children}
      <button onClick={submitHandler}>{value}</button>
    </div>
  );
}
