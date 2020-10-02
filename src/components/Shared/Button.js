import React from 'react';
import styled from 'styled-components';

export default function Button ({ children, type }) {
  return (
    <button type={type}>{children}</button>
  );
}