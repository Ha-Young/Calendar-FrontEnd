import React from "react";
import styled from "styled-components";
import { getWeekStr } from "../../../utils/convertTime";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 67.5%;
  padding-left: 0.2em;
  padding-top: 0.5em;
  font-size: 2em;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2em;
    height: 2em;
    border-radius: 50%;

    p {
      margin-top: 0.2em;
      color: #ABABAB;
    }

    &:hover {
      background-color: #ABABAB;
      cursor: pointer;

      p {
        color: #FFFFFF;
      }
    }
  }
`;

const WeekNum = ({ count }) => {
  const newWeek = getWeekStr(count);
  return (
    <Wrapper>
      {newWeek.map(num => {
        return (
          <div key={num}>
            <p>{num}</p>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default WeekNum;
