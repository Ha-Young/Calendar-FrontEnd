import React from "react";
import styled from "styled-components";
import Remote from "./Remote";
import User from "./User";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = () => {
  return (
    <Wrapper>
      <Remote />
      <User />
    </Wrapper>
  );
};

export default Nav;
