import React from "react";
import Input from "../../shared/Input";

const Description = ({ saveData }) => {
  return (
    <Input>
      <label htmlFor="description">
        Add Desc:
      </label>
      <input
        type="text"
        id="description"
        onChange={ev => saveData(ev.target.value)}
      />
    </Input>
  );
};

export default Description;
