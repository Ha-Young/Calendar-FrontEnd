import React from "react";
import styled from "styled-components";
import Day from "./Day";

const Wrapper = styled.div`
  width: 80%;
  padding: 0 5em 0;
  padding-top: 8em;
`;

const Main = ({ count }) => {
  return (
    <Wrapper>
      <Day count={count} />
    </Wrapper>
  );
};

export default Main;
