import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 67%;
  padding-left: 0.5em;
  color: #ABABAB;
`;

const dayStr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const WeekStr = () => {
  return (
    <Wrapper>
      {dayStr.map(day => {
        return (
          <div key={day}>
            <p>{day}</p>
          </div>
        );
      })}
    </Wrapper>
  );
}

export default WeekStr;
