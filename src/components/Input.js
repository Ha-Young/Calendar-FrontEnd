import React, { useEffect, useRef } from 'react';

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
