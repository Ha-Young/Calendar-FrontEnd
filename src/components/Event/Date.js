import React from "react";
import Input from "../../shared/Input";

const Date = ({ saveData }) => {
  return (
    <Input>
      <label htmlFor="date">
        Date:
      </label>
      <input
        type="date"
        id="date"
        onChange={e => saveData(e.target.value)}
      />
    </Input>
  );
};

export default Date;
