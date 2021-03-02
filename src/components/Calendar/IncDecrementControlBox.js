import React from "react";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import styles from "./IncDecrementControlBox.module.css";

export default function IncDecrementControlBox ({ state, dispatch, decreaseAction, increaseAction }) {
  return (
    <div className={styles.IncDecrementControlBox}>
      <IoArrowBackCircleOutline className={styles.leftArrow}
        onClick={
          () => dispatch(decreaseAction)
        }
      />
        {state}
      <IoArrowForwardCircleOutline className={styles.rightArrow}
        onClick={
          () => dispatch(increaseAction)
        }
      />
    </div>
  );
}
