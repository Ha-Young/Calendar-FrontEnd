import React from "react";
import styled from "styled-components";
import WeekStr from "./WeekStr";
import WeekNum from "./WeekNum";

const Header = styled.header`
  position: fixed;
  top: 6.05em;
  height: 5.5em;
  width: 120%;
  padding: 2em;
  padding-left: 15em;
  background-color: #FFFFFF;
  margin-left: 17em;
  z-index: 55;
`;

const WeekHeader = () => {
  return (
    <Header>
      <WeekStr />
      <WeekNum />
    </Header>
  );
}

export default WeekHeader;
