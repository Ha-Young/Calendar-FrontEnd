import React from "react";
import styled from "styled-components";
import Calendar from "../../shared/Calendar";
import Timeline from "./Timeline";

const Wrapper = styled.div`
`;

const Daily = () => {
  return (
    <Calendar>
      <Timeline />
    </Calendar>
  );
}

export default Daily;
