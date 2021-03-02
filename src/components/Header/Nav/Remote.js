import React from "react";
import styled from "styled-components";
import RemoteIcons from "./RemoteIcons";
import Filter from "./Filter";

const Wrapper = styled.div`
  display: flex;
  justify-contnet: space-between;
  align-items: center;
`;

const Remote = () => {
  return (
    <Wrapper>
      <RemoteIcons />
      <Filter />
    </Wrapper>
  );
}

export default Remote;
