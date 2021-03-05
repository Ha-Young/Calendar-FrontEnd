import React from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import styles from "./MoveButtons.module.css";

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
