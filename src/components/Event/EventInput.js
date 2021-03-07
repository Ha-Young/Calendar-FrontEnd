import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Input from "../../shared/Input";

const Date = ({ saveValue, value, name, type }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.value = value;
  }, [value]);

  return (
    <Input>
      <label htmlFor="schedule-input">
        {name}:
      </label>
      <input
        type={type}
        id="schedule-input"
        ref={ref}
        onChange={e => saveValue(e.target.value)}
      />
    </Input>
  );
};

export default Date;

Date.propTypes = {
  saveValue: PropTypes.func.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
