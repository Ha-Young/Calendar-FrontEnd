import React from 'react';
import styled from "styled-components";
import styles from './ArrowShapedButton.module.css';

const Button = styled.i`
  width: 8px;
  height: 8px;
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
`;

export default function ArrowShapedButton ({ css, direction, onClick }) {
  return (
    <Button
      style={css}
      className={styles[direction]}
      onClick={() => console.log(1)}>
    </Button>
  );
}