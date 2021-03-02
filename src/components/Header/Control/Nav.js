import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const HeaderNav = styled.div`
  dislay: flex;
`;

const Nav = () => {
  return (
    <HeaderNav>
      <p>2021년 3월</p>
      <FontAwesomeIcon icon={faAngleDown} />
    </HeaderNav>
  );
}

export default Nav;
