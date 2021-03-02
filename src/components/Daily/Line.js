import React from "react";
import styled from "styled-components";
import convertTime from "../../utils/convertTime";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3em;

  .paint-box {
    width: 100%;
    height: 100%;
    border: 1px solid gray;
  }
`;

const Line = ({ time }) => {

  return (
    <Wrapper>
      <div className="time">
        <p>{convertTime(time)}</p>
      </div>
      <div className="paint-box"></div>
    </Wrapper>
  );
}

export default Line;
