import React from "react";
import styles from "./MoveButtons.module.css";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export default function MoveButtons(props) {
  const { 
    onPrevButtonClick, 
    onNextButtonClick, 
  } = props;
  
  return (
    <div className={styles.MoveButtonBox}>
      <GoChevronLeft 
        className={styles.MoveButton} 
        size={40} 
        onClick={onPrevButtonClick} 
      />
      <GoChevronRight 
        className={styles.MoveButton} 
        size={40} 
        onClick={onNextButtonClick} 
      />
    </div>
  );
}
