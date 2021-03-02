import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Control from "./Control/Control";
import Logo from "./Logo";

const Header = styled.header`
  display: flex;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

// TODO: Create your own header.
const AppHeader = () => {
  return (
    <Header>
      <nav>
        <Logo />
        <Control />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/weekly">weekly</Link></li>
          <li><Link to="/daily">daily</Link></li>
        </ul>
      </nav>
    </Header>
  );
}

export default AppHeader;
