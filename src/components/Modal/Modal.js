import React from "react";
import styles from "./Modal.module.css";

export default function Modal ({ children }) {
  const handleCreate = ev => {
    ev.preventDefault();
  }
  return (
    <div className={styles.overlay}>
      <div className={styles.contents_wrap} onSubmit={handleCreate}>
        {children}
      </div>
    </div>
  );
}
