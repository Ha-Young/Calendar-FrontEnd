import React from "react";
import styled from "styled-components";
import Control from "./Control/Control";
import Logo from "./Logo";
import Nav from "./Nav/Nav";

const Header = styled.header`
  display: flex;

  nav {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .flexBox {
      display: flex;
      justify-content: space-between;
      width: 35em;
    }

    .right {
      width: 20em;
    }
  }
`;

// TODO: Create your own header.
const AppHeader = () => {
  return (
    <Header>
      <nav>
        <div className="flexBox">
          <Logo />
          <Control />
        </div>
        <Nav />
      </nav>
    </Header>
  );
}

export default AppHeader;
