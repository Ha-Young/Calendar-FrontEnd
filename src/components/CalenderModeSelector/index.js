import React from "react";
import styles from "./CalenderModeSelector.module.css";

export default function CalenderModeSelector() {

  return (
    <select>
      <option value="daily" defaultValue>Daily</option>
      <option value="weekly">Weekly</option>
    </select>
  )
}