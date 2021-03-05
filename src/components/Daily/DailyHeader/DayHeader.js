import React from "react";
import styled from "styled-components";
import Day from "./Day"
import EventPageBtn from "../../../shared/EventPageBtn";

const Header = styled.header`
  position: fixed;
  display: flex;
  justify-content: left;
  align-items: center;
  top: 6.05em;
  height: 5em;
  width: 100%;
  padding: 2em;
  padding-left: 40%;
  background-color: #FFFFFF;
  border-bottom: 0.1em solid #ABABAB;
`;

const DayHeader = ({ count }) => {
  return (
    <Header>
      <EventPageBtn />
      <Day count={count} />
    </Header>
  );
};

export default DayHeader;
