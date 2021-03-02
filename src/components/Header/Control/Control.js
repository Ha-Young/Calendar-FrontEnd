import React from "react";
import styled from "styled-components";
import RightArrowButton from "./RightArrowButton";
import LeftArrowButton from "./LeftArrowButton";

import Nav from "./Nav";

const HeaderControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #EEEEEE;
`;

const Control = () => {
  return (
    <HeaderControl>
      <div className="today">Today</div>
      <div className="btns">
        <LeftArrowButton />
        <RightArrowButton />
      </div>
      <Nav />
    </HeaderControl>
  );
}

export default Control;
