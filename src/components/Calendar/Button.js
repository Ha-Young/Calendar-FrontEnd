import React from "react";
import PropTypes from 'prop-types';

export default function Button({ text, onClick }) {
  return (
    <button onClick={onClick}>
      <span>{text}</span>
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
