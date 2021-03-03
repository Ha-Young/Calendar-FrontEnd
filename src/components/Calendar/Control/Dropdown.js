import React from "react";
// import styles from "./Dropdown.module.css";

export default function Dropdown({ name, optionList, onChange }) {
  if (!Array.isArray(optionList)) {
    throw new Error("optionList is must be array of string.");
  }
  
  return (
    <select 
      name={name}
      onChange={onChange}
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
  );
}