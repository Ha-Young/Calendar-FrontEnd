import React from "react";
import styled from "styled-components";

const StyledEvent = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  border-radius: 10px;
  height: ${(props) => `${25 * props.height}px`};
  background-color: ${(props) => `${props.color}`};
  z-index: 50;
`;

const StyledTitle = styled.h3`
  color: white;
  font-size: 15px;
  font-weight: 700;
`;

const StyledEventTitle = styled.div`
  color: white;
`;

const StyledEventDescription = styled.div`
  color: white;
`;

export default function Event({
  id,
  height,
  title,
  startHour,
  endHour,
  description,
  color,
  onClickGetEventInfo,
  onEventClick,
}) {
  return (
    <>
      <StyledEvent
        height={height}
        color={color}
        onClick={(e) => {
          e.stopPropagation();
          onClickGetEventInfo({ id, title, startHour, endHour, description });
          onEventClick();
        }}
      >
        <StyledTitle>{title}</StyledTitle>
        <StyledEventTitle>{`${startHour}h ~ ${endHour}h`}</StyledEventTitle>
        <StyledEventDescription>{description}</StyledEventDescription>
      </StyledEvent>
    </>
  );
}
