import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4em;
  border: 1px solid #ABABAB;
  border-top: none;
  border-left: none;

  &:hover {
    background-color: #EEEEEE;
    border-left: 1px solid #ABABAB;
    cursor: pointer;
  }
`;

const EventBox = ({ title, color, hasEvent, eventStart, ID }) => {
  const background = hasEvent ? color : null;
  const text = hasEvent ? title : null;

  const handleClick = (ev) => {
    if (hasEvent) {
      console.log(ev.target.getAttribute("id"));
    }
  };

  return (
    <Wrapper
      id={ID}
      onClick={handleClick}
      style={{background}}
    >
      {eventStart ? text : null}
    </Wrapper>
  );
};

export default EventBox;
