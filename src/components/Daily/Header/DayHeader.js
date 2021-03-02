import React from "react";
import styled from "styled-components";
import Day from "./Day"

const Header = styled.header`
  position: fixed;
  top: 6.05em;
  height: 5em;
  width: 120%;
  padding: 2em;
  padding-left: 15em;
  margin-left: 17em;
  background-color: #FFFFFF;
  z-index: 55;
`;

const DayHeader = () => {
  return (
    <Header>
      <Day />
    </Header>
  );
}

export default DayHeader;
