import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const HeaderNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5em;
  padding: 0.2em;

  p {
    font-size: 1.6em;
    margin-right: 0.2em;
  }

  &:hover {
    background-color: #EEEEEE;
    cursor: pointer;
  }
`;

const Nav = () => {
  return (
    <HeaderNav>
      <p>2021년 3월</p>
      <FontAwesomeIcon icon={faCaretDown} />
    </HeaderNav>
  );
};

export default Nav;
