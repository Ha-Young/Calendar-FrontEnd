import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ children, onClick }) => {
  const closeModal = () => {
    onClick();
  };
  return (
    <>
      <div className={styles.background} onClick={closeModal} />
      <div className={styles.content}>{children}</div>
    </>
  );
};

export default Modal;
