import React from 'react';
import styled from 'styled-components';
import styles from './ArrowShapedButton.module.css';

const ArrowShape = styled.i`
  width: 8px;
  height: 8px;
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
`;

export default function ArrowShapedButton ({ css, direction, onClick }) {
  return (
    <ArrowShape
      style={css}
      className={styles[direction]}
      onClick={onClick}>
    </ArrowShape>
  );
}