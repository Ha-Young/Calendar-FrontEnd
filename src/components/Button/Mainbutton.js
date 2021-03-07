import React from "react";
import styles from "./Button.module.css";
import * as Aioutline from "react-icons/ai";

export default function mainButton({ onClick }) {
  return (
    <div className={`${styles.wrapper}`}>
      <Aioutline.AiFillPlusCircle onClick={onClick} />
    </div>
  );
}
