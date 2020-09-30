import React from 'react';

import './CustomButton.scss';

export default function CustomButton({ children, selected, ...otherProps }) {
  return (
    <button
      className={`CustomButton${selected ? ' selected' : ''}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
