import React from "react";
import InputBox from "./InputBox";

export default function InputDate({ inputDateClassName, inputDateRef, isReadOnly }) {
  return (
    <InputBox 
      labelFor="date"
      labelContent="Date"
    >
      <input 
        className={inputDateClassName} 
        type="date" 
        name="date"
        ref={inputDateRef}
        readOnly={!!isReadOnly}
      />
    </InputBox>
  );
}
