import React from "react";
import styled from "styled-components";

const StyledEvent = styled.div`
  position: absolute;
  width: 100%;
  height: ${(props) => `${25 * props.height}px`};
  background-color: brown;
  z-index: 10;
`;

export default function Event({ height, title, description }) {
  return (
    <StyledEvent height={height}>
      <h2>{title}</h2>
      <h3>{description}</h3>
    </StyledEvent>
  );
}
