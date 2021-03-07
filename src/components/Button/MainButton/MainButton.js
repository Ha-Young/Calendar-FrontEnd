import React from "react";
import styles from "./MainButton.module.css";
import * as Aioutline from "react-icons/ai";

export default function MainButton({ onClick }) {
  return (
    <div className={`${styles.wrapper}`}>
      <Aioutline.AiFillPlusCircle onClick={onClick} />
    </div>
  );
}
