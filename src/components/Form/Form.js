import React from "react";
import { Link } from 'react-router-dom';
import styles from "./Form.module.css";

export default function Form({
  children,
  submitHandler,
  buttonDescription,
  redirectUrl,
}) {
  return (
    <form
      className={styles.Form}
      onSubmit={submitHandler}
    >
      {children}
      <Link to={redirectUrl}>
        <input type="submit" value={buttonDescription} />
      </Link>
    </form>
  );
}
