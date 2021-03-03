import React from "react";
import styles from "./Shared.module.scss";

export default function Container(props) {
  return (
    <div className={styles.InputContainer}>
      {props.children}
    </div>
  )
}
