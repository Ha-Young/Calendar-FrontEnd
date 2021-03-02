import React from "react";
import styles from "./DayBox.module.css"

export default function DayBox({ title, description, hasActiveToggle }) {
  const [titleClassName, descriptionClassName] = hasActiveToggle 
    ? [styles.Title, styles.description]
    : [styles.NonToggleTitle, styles.NonToggleDescription]

  return (
    <span className={styles.DayBox}>
      <span className={titleClassName}>
        {title}
      </span>
      <span className={descriptionClassName}>
        {description}
      </span>
    </span>
  );
}