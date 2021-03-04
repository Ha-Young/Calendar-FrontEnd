import React from "react";
import { PLACEHOLDER } from "../../../constants/newEvent";
import styles from "./TextArea.module.css";

function TextArea({ text, updateText }) {
  return (
    <div className={styles.TextArea}>
      <textarea
        autoComplete="off"
        aria-label={PLACEHOLDER.TITLE}
        placeholder={PLACEHOLDER.TITLE}
        value={text.title}
        onChange={(e) => {
          text.title = e.target.value;
          updateText(text);
        }}
        required={true}
      />
      <textarea
        className={styles.description}
        autoComplete="off"
        aria-label={PLACEHOLDER.DESCRIPTION}
        placeholder={PLACEHOLDER.DESCRIPTION}
        value={text.description}
        onChange={(e) => {
          text.description = e.target.value;
          updateText(text);
        }}
        required={true}
      />
    </div>
  );
}

export default TextArea;
