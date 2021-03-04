import React from "react";
import styles from "./Shared.module.scss";

export default function Button({ handleClickEvent, children }) {
  return (
    <button type="button" onClick={handleClickEvent}>
      {children}
    </button>
  )
}
