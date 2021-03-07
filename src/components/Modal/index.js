import React, { useEffect } from "react";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";

const Modal = ({ children, onClick }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, []);

  const closeModal = onClick;


  return (
    <>
      <div className={styles.background} onClick={closeModal} />
      <div className={styles.content}>{children}</div>
    </>
  );
};

export default Modal;

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
};
