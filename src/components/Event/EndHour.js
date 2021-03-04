import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 10em;
  margin: 1em;

  input {
    height: 2em;
    width: 100%;
    padding: 0.8m 0.5m;
  }
`;

const EndTime = ({ saveData }) => {
  return (
    <Wrapper>
      <input
        type="time"
        id="end-time"
        onChange={e => saveData(e.target.value)}
      />
    </Wrapper>
  );
};

export default EndTime;
