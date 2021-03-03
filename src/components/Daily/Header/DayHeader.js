import React from "react";
import styled from "styled-components";
import Day from "./Day"
import EventAddBtn from "./EventAddBtn";

const Header = styled.header`
  position: fixed;
  display: flex;
  justify-content: left;
  align-items: center;
  top: 6.05em;
  height: 5em;
  width: 120%;
  padding: 2em;
  padding-left: 5em;
  margin-left: 17em;
  background-color: #FFFFFF;
  border-bottom: 0.1em solid #ABABAB;
`;

const DayHeader = ({ count }) => {
  return (
    <Header>
      <EventAddBtn />
      <Day count={count} />
    </Header>
  );
};

export default DayHeader;
