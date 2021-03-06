import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const StyledEvent = styled.div`
  position: absolute;
  width: 100%;
  border-radius: 5px;
  height: ${(props) => `${25 * props.height}px`};
  background-color: brown;
  z-index: 10;
`;

export default function Event({
  id,
  height,
  title,
  startHour,
  endHour,
  description,
  onClickGetEventInfo,
  showModal,
}) {
  const location = useLocation();

  return (
    <>
      <StyledEvent
        height={height}
        onClick={(e) => {
          e.stopPropagation();
          onClickGetEventInfo({ id, title, startHour, endHour, description });
          showModal();
        }}
      >
        <h2 style={{ color: "white" }}>{title}</h2>
        <h3 style={{ color: "white" }}>{description}</h3>
      </StyledEvent>
    </>
  );
}

// <Link
// to={{
//   pathname: `/Calendar/Modal/${id}`,
//   state: { background: location },
// }}
// >

// </Link>
