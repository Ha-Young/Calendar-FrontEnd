import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-left: 0.5em;
  color: #ABABAB;
  font-size: 1.8em;

  .day-str {
    font-size: 0.8em;
    padding-left: 0.5em;
    margin-bottom: 0.2em;
  }
  
  .day-num {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2em;
    height: 2em;
    border: 0.1em solid #ABABAB;
    border-radius: 10%;
    
    p {
      margin-top: 0.2em;
      font-size: 1.8em;
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

const dayStr = "SUN";
const dayNum = 0;

const Day = () => {
  return (
    <Wrapper>
      <div className="day-str">
        <p>{dayStr}</p>
      </div>
      <div className="day-num">
        <p>{dayNum}</p>
      </div>
    </Wrapper>
  );
}

export default Day;
