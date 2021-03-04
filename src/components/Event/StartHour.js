import React from "react";
import Input from "../../shared/Input";

const StartTime = ({ saveData }) => {
  return (
    <Input>
    <label htmlFor="start-time">
      Start Time:
    </label>
      <input
        type="time"
        id="start-time"
        onChange={e => saveData(e.target.value)}
      />
    </Input>
  );
};

export default StartTime;
