import React from "react";
import styled from "styled-components";
import WeekStr from "./WeekStr";
import WeekNum from "./WeekNum";
import FlexColumnBox from "../../../shared/FlexColumnBox";
import EventPageBtn from "../../../shared/EventPageBtn";

const Header = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 6.05em;
  height: 5em;
  width: 125%;
  padding: 2em;
  background-color: #FFFFFF;
  border-bottom: 0.1em solid #ABABAB;
`;

const WeekHeader = ({ count }) => {
  return (
    <Header>
      <FlexColumnBox>
        <EventPageBtn />
        <WeekStr />
        <WeekNum count={count} />
      </FlexColumnBox>
    </Header>
  );
};

export default WeekHeader;
