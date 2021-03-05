import React from "react";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import styles from "./IncDecrementControlBox.module.css";

export default function IncDecrementControlBox ({ value, onIncreaseClick, onDecreaseClick }) {
  return (
    <div className={styles.IncDecrementControlBox}>
      <IoArrowBackCircleOutline className={styles.leftArrow}
        onClick={onDecreaseClick}
      />
        {value}
      <IoArrowForwardCircleOutline className={styles.rightArrow}
        onClick={onIncreaseClick}
      />
    </div>
  );
}
