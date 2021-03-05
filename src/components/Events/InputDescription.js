import React from "react";
import InputBox from "./InputBox";

export default function InputDescription({ textareaClassName, textareaRef, isReadOnly }) {
  return (
    <InputBox 
      labelFor="description"
      labelContent="Description"
    >
      <textarea 
        className={textareaClassName} 
        name="description" 
        cols="30" 
        rows="10"
        ref={textareaRef}
        readOnly={isReadOnly}
      />
    </InputBox>
  );
}
