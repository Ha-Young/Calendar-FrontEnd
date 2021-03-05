import React, { useEffect, useRef } from "react";
import Input from "../../shared/Input";

const Date = ({ saveData, value }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.value = value;
  }, [value]);

  return (
    <Input>
      <label htmlFor="date">
        Date:
      </label>
      <input
        type="date"
        id="date"
        ref={ref}
        onChange={e => saveData(e.target.value)}
      />
    </Input>
  );
};

export default Date;
