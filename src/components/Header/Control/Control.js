import React from "react";
import styled from "styled-components";
import RightArrowButton from "./RightArrowButton";
import LeftArrowButton from "./LeftArrowButton";
import Today from "./Today";

import Nav from "./Nav";

const HeaderControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 18em;
`;

const Control = () => {
  return (
    <HeaderControl>
      <Today />
      <div>
        <LeftArrowButton />
        <RightArrowButton />
      </div>
      <Nav />
    </HeaderControl>
  );
}

export default Control;
