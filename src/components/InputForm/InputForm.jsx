import React, { useEffect, useRef, useState } from "react";

import WithLabel from "../WithLabel/WithLabel";
import styles from "./InputForm.module.css";

function InputForm({ onSubmit, title = "", content = "", disable, children }) {
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const [holdSubmit, setHoldSubmit] = useState(disable);

  useEffect(() => {
    titleRef.current.value = title;
    contentRef.current.value = content;
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (holdSubmit) {
      setHoldSubmit(!holdSubmit);
      return;
    }

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
          disabled={disable}
        />
      </WithLabel>
      <WithLabel label="내용">
        <textarea
          className={styles.content}
          ref={contentRef}
          disabled={disable}
        />
      </WithLabel>
      {children}
    </form>
  );
}

export default InputForm;
