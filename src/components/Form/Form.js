import React from "react";
import styles from "./Form.module.css";

export default function Form({
  children,
  submitHandler,
  buttonDescription,
}) {
  return (
    <form
      className={styles.Form}
      onSubmit={submitHandler}
    >
      {children}
      <input type="submit" value={buttonDescription} />
    </form>
  );
}
