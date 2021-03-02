import React from "react";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 8em;
`;

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

const WeekHeader = () => {
  return (
    <Header>
      Weekly Header
    </Header>
  );
}

export default WeekHeader;
