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

const Control = ({ nextDay, prevDay, resetDay }) => {
  return (
    <HeaderControl>
      <Today resetDay={resetDay} />
      <div>
        <LeftArrowButton prevDay={prevDay} />
        <RightArrowButton nextDay={nextDay} />
      </div>
      <Nav />
    </HeaderControl>
  );
};

export default Control;
