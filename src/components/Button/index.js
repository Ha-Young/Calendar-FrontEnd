import React from "react";
import styles from "./Button.module.css";

export default function Button({
  title,
  onClick,
}) {
  return (
    <button onClick={onClick} className={styles.Button} title={title}>
      {title}
    </button>
  );
}
