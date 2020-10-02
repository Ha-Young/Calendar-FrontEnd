import React from 'react';
import styled from 'styled-components';

export default function Button ({ children, type, name, value }) {
  return (
    <button type={type} name={name} value={value}>{children}</button>
  );
}