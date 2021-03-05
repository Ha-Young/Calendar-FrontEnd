import React from "react";
import styles from "./Button.module.css";

export default function Button({ title }) {

  return (
    <button className={styles.Button} title={title}>
      {title}
    </button>
  )
}
