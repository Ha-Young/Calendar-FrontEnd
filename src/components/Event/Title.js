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
    text-align: right;
    color: #ABABAB;
  }

  input {
    height: 2em;
    width: 100%;
    padding: 0.8m 0.5m;
  }
`;

const Title = ({ saveData, dataType }) => {
  return (
    <Wrapper>
      <label htmlFor="title">
        Add title:
      </label>
      <input
        type="text"
        id="title"
        onChange={ev => saveData(ev.target.value, dataType.TITLE)}
      />
    </Wrapper>
  );
};

export default Title;
