import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Input from "../../shared/Input";

const Title = ({ saveData, value }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.value = value;
  }, [value]);

  return (
    <Input>
      <label htmlFor="title">
        Add title:
      </label>
      <input
        type="text"
        id="title"
        ref={ref}
        onChange={ev => saveData(ev.target.value)}
      />
    </Input>
  );
};

export default Title;

Title.propTypes = {
  saveData: PropTypes.func.isRequired,
  value: PropTypes.string,
};
