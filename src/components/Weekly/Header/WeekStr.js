import React from "react";
import styled from "styled-components";
import { dayName } from "../../../utils/convertTime";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 155%;
  padding-top: 1em;
  color: #ABABAB;
`;

const WeekStr = () => {
  return (
    <Wrapper>
      {dayName.map(day => {
        return (
          <div key={day}>
            <p>{day}</p>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default WeekStr;
