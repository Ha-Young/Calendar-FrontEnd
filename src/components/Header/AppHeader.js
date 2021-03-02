import React from "react";
import styled from "styled-components";
import Control from "./Control/Control";
import Logo from "./Logo";
import Nav from "./Nav/Nav";

const Header = styled.header`
  position: fixed;
  display: flex;
  width: 100%;
  height: 6em;
  margin-left: 1em;
  border-bottom: 1px solid #ABABAB;

  nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #FFFFFF;

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
