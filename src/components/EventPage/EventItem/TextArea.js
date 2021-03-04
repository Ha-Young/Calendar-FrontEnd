import React from "react";
import { PLACEHOLDER } from "../../../constants/newEvent";
import styles from "./TextArea.module.css";

function TextArea() {
  return (
    <div className={styles.TextArea}>
      <textarea
        autoComplete="off"
        aria-label={PLACEHOLDER.TITLE}
        placeholder={PLACEHOLDER.TITLE}
      />
      <textarea
        className={styles.description}
        autoComplete="off"
        aria-label={PLACEHOLDER.DESCRIPTION}
        placeholder={PLACEHOLDER.DESCRIPTION}
      />
    </div>
  );
}

export default TextArea;
