import React, { useRef } from "react";

import WithLabel from "../WithLabel/WithLabel";
import styles from "./InputForm.module.css";

function InputForm({ onSubmit, children }) {
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({
      title: titleRef.current.value,
      content: contentRef.current.value,
    });
  }

  return (
    <form
        className={styles.inputForm}
        onSubmit={handleSubmit}
      >
        <WithLabel label="제목">
          <input
            className={styles.title}
            ref={titleRef}
            type="text"
          />
        </WithLabel>
        <WithLabel label="내용">
          <textarea
            className={styles.content}
            ref={contentRef}
          />
        </WithLabel>
        {children}
      </form>
  );
}

export default InputForm;
