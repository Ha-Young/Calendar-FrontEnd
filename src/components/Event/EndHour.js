import React, { useEffect, useRef } from "react";
import Input from "../../shared/Input";

const EndTime = ({ saveData, value }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.value = value;
  }, [value]);

  return (
    <Input>
    <label htmlFor="end-time">
      End Time:
    </label>
      <input
        type="time"
        id="end-time"
        ref={ref}
        onChange={e => saveData(e.target.value)}
      />
    </Input>
  );
};

export default EndTime;
