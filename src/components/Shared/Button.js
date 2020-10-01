import React from 'react';
import styled from 'styled-components';

export default function Button ({ children, onClick }) {
  return (
    <button>{children}</button>  
  );
}