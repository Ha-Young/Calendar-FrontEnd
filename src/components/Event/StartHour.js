import React, {useEffect, useRef } from "react";
import Input from "../../shared/Input";

const StartTime = ({ saveData, value }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.value = value;
  }, [value]);

  return (
    <Input>
    <label htmlFor="start-time">
      Start Time:
    </label>
      <input
        type="time"
        id="start-time"
        ref={ref}
        onChange={e => saveData(e.target.value)}
      />
    </Input>
  );
};

export default StartTime;
