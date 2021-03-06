import React from "react";
import styled from "styled-components";
import convertTime from "../../utils/convertToAmPm";
import { times } from "../../utils/makeSpace";

const Wrapper = styled.div`
  .flex-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .time {
    height: 4em;
    width: 3em;
    margin-right: 1em;
    text-align: right;

    p {
      color: #ABABAB;
    }
  }

  .mark {
    height: 4em;
    width: 1em;
    border-bottom: 1px solid #ABABAB;
    border-right: 1px solid #ABABAB;
  }
`;

const TimeLine = () => {
  return (
    <Wrapper>
      {times.map(time => {
        return (
          <div key={time} className="flex-box">
            <div className="time">
              <p>{convertTime(time)}</p>
            </div>
            <div className="mark"></div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default TimeLine;
