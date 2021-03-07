import React from "react";
import { PLACEHOLDER } from "../../../constants/common";
import styles from "./TextContainer.module.css";
import PropTypes from "prop-types";

function TextContainer({ text, updateText }) {
  return (
    <div className={styles.TextArea}>
      <textarea
        autoComplete="off"
        aria-label={PLACEHOLDER.TITLE}
        placeholder={PLACEHOLDER.TITLE}
        value={text.title}
        onChange={(e) => {
          updateText({
            ...text,
            title: e.target.value,
          });
        }}
        required
      />
      <textarea
        className={styles.description}
        autoComplete="off"
        aria-label={PLACEHOLDER.DESCRIPTION}
        placeholder={PLACEHOLDER.DESCRIPTION}
        value={text.description}
        onChange={(e) => {
          updateText({
            ...text,
            description: e.target.value,
          });
        }}
        required
      />
    </div>
  );
}

export default TextContainer;

TextContainer.propTypes = {
  text: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  updateText: PropTypes.func.isRequired,
};
