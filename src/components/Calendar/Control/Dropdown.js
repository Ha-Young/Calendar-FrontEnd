import React from "react";
import styles from "./Dropdown.module.css";

export default function Dropdown({ name, optionList, onChange }) {
  if (!Array.isArray(optionList)) {
    throw new Error("optionList is must be array of string.");
  }
  
  return (
    <div className={styles.Dropdown}>
      <select 
        name={name}
        onChange={onChange}
        className={styles.Select}
        >
        {optionList.map((option, i) => {
          return (
            <option 
            value={option}
            key={i}
            >
              {option}
            </option>
          );
        })}
      </select>
    </div>  
  );
}