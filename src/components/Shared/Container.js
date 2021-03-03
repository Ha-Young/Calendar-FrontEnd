import React from "react";
import styles from "./Shared.module.scss";

export default function Container(props) {
  return (
    <div className={styles.FormContainer}>
      {props.children}
    </div>
  )
}
