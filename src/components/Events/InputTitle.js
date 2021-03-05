import React from "react";
import InputBox from "./InputBox";

export default function InputTitle({ inputRef, inputClassName, isReadOnly }) {
  return (
    <InputBox 
      labelFor="title"
      labelContent="Title"
    >
      <input 
        className={inputClassName} 
        type="text" 
        name="title" 
        ref={inputRef}
        readOnly={isReadOnly}
      />
    </InputBox>
  );
}
