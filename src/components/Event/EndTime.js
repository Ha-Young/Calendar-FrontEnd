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

const EndTime = ({ saveData, dataType }) => {
  return (
    <Wrapper>
      <label htmlFor="end-day">
        End Time:
      </label>
      <input type="date" id="end-day" onChange={e => saveData(e.target.value, dataType.END_DATE)} />
      <input type="time" id="end-time" onChange={e => saveData(e.target.value, dataType.END_HOUR)} />
    </Wrapper>
  );
};

export default EndTime;
