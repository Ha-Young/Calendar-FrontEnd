import React from "react";
import styles from "./EventEditor.module.css";

export default function InputBox({ labelFor, labelContent, stylesClass = "InputElemBox", children }) {
  return (
    <div className={styles[stylesClass]}>
      <label htmlFor={labelFor}>{labelContent}</label>
      {children}
    </div>
  );
}