import React from "react";
import InputBox from "./InputBox";

export default function InputTime({ inputTimeClassName, inputTimeRef, isReadOnly, isStartTime, onChange }) {
  const name = isStartTime ? "start" : "end";
  const labelContent = isStartTime ? "Start" : "End";
  
  return (
    <InputBox 
      labelFor={name}
      labelContent={labelContent}
    >
      <input 
        className={inputTimeClassName} 
        type="time" 
        name={name}
        onChange={onChange}
        ref={inputTimeRef}
        readOnly={isReadOnly}
      />
    </InputBox>
  );
}
