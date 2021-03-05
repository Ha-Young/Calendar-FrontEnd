import React from "react";
import styles from "./Shared.module.scss";

export default function Container({ children }) {
  return (
    <div className={styles.FormContainer}>
      {children}
    </div>
  );
}
