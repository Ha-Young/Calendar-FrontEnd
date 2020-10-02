import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function Input({ value, onChange, focus, ...attr }) {
  const focusedEl = useRef();

  useEffect(() => {
    if (focus) {
      focusedEl.current.focus();
    }
  }, [focus]);

  return (
    <input
      ref={focus && focusedEl}
      value={value}
      onChange={onChange}
      {...attr}
    />
  );
}

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  focus: PropTypes.bool,
};
