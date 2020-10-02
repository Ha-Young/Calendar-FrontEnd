import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./Modal.module.css";

export default function Modal ({ text }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => document.body.style.overflow = "visible";
  }, []);

  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className={styles.Modal}>
      <div className={styles.modalOverlay} onClick={handleClick}></div>
      <div className={styles.modalContents}>
        <button className={styles.closeButton} onClick={handleClick}>
          <AiOutlineCloseCircle size="2rem" />
        </button>
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  );
}
