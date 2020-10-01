import React from 'react';

import './CustomButton.scss';

export default function CustomButton({
  children,
  selected,
  onClick,
  ...otherProps
}) {
  return (
    <button
      className={`CustomButton${selected ? ' selected' : ''}`}
      onClick={() => (selected ? null : onClick())}
      {...otherProps}
    >
      {children}
    </button>
  );
}
