import React from "react";
import styles from "./MoveButtons.module.css";

export default function MoveButtons(props) {
  const { 
    onPrevButtonClick, 
    onNextButtonClick, 
    prevButtonText, 
    nextButtonText 
  } = props;
  
  return (
    <div className={styles.MoveButtonBox}>
      <button 
        className={styles.PrevButton}
        onClick={onPrevButtonClick}
      >
        {prevButtonText}
      </button>
      <button 
        className={styles.NextButton}
        onClick={onNextButtonClick}
      >
        {nextButtonText}
      </button>
    </div>
  );
}