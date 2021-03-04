import React from "react";
import Input from "../../shared/Input";

const Title = ({ saveData }) => {
  return (
    <Input>
      <label htmlFor="title">
        Add title:
      </label>
      <input
        type="text"
        id="title"
        onChange={ev => saveData(ev.target.value)}
      />
    </Input>
  );
};

export default Title;
