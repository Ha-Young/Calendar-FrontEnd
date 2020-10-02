import React from "react";
import styles from "./Modal.module.css";

export default function Modal({ onOverlayClick, children }) {
  return (
    <>
      <div className={styles.overlay} onClick={onOverlayClick} />
      <div className={styles.Modal}>
        {children}
      </div>
    </>
  );
}
