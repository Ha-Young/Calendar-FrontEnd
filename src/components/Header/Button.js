import React from "react";
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
