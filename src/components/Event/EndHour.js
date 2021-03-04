import React from "react";
import Input from "../../shared/Input";

const EndTime = ({ saveData }) => {
  return (
    <Input>
    <label htmlFor="end-time">
      End Time:
    </label>
      <input
        type="time"
        id="end-time"
        onChange={e => saveData(e.target.value)}
      />
    </Input>
  );
};

export default EndTime;
