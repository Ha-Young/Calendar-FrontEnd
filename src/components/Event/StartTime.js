import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 10em;
  margin: 1em;

  label {
    position: absolute;
    left: -5em;
    padding: 0.5em 0.5em;
    color: #ABABAB;
    cursor: text;
  }

  input {
    height: 2em;
    width: 100%;
    padding: 0.8m 0.5m;
  }
`;

const StartTime = ({ saveData, dataType }) => {
  return (
    <Wrapper>
      <label htmlFor="start-day">
        Start Time:
      </label>
      <input type="date" id="start-day" />
      <input type="time" id="start-time" />
    </Wrapper>
  );
};

export default StartTime;
