import React from "react";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import styles from "./IncDecrementControlBox.module.css";

export default function IncDecrementControlBox ({ value, onArrowClick }) {
  return (
    <div className={styles.IncDecrementControlBox}>
      <IoArrowBackCircleOutline
        className={styles.leftArrow}
        data-type="left-arrow"
        onClick={onArrowClick}
      />
        {value}
      <IoArrowForwardCircleOutline
        className={styles.rightArrow}
        data-type="right-arrow"
        onClick={onArrowClick}
      />
    </div>
  );
}
