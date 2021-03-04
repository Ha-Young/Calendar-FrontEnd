import React from "react";
import styled from "styled-components";

const StyledEvent = styled.div`
  position: absolute;
  width: 100%;
  border-radius: 5px;
  height: ${(props) => `${25 * props.height}px`};
  background-color: brown;
  z-index: 10;
`;

export default function Event({ height, title, description }) {
  return (
    <StyledEvent height={height}>
      <h2 style={{ color: "white" }}>{title}</h2>
      <h3 style={{ color: "white" }}>{description}</h3>
    </StyledEvent>
  );
}
