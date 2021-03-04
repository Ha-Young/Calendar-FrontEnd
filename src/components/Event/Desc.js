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

const Desc = ({ saveData }) => {
  return (
    <Wrapper>
      <label htmlFor="desc">
        Add Desc:
      </label>
      <input
        type="text"
        id="desc"
        onChange={ev => saveData(ev.target.value)}
      />
    </Wrapper>
  );
};

export default Desc;
