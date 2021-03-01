import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

const Wrapper = styled.header`
  position: absolute;
  top: 1em;
  left: 1em;
`;

// TODO: Create your own header.
const Header = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/weekly">weekly</Link></li>
          <li><Link to="/daily">daily</Link></li>
        </ul>
      </nav>
    </Wrapper>
  );
}

export default Header;
