import React from 'react';

export default function Button ({ children, type }) {
  return (
    <button type={type}>{children}</button>
  );
}