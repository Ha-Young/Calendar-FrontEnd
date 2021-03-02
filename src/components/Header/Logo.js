import React from "react";
import styled from "styled-components";
import logoPng from "../../assets/logo.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5em;

  p {
    margin: 0.2em 0 0 0.2em;
    font-size: 1.5em;
  }

  img {
    width: 2.8em;
  }
`;

const Logo = () => {
  return (
    <Wrapper>
      <img src={logoPng} alt="logo.png" />
      <p>Calendar</p>
    </Wrapper>
  );
}

export default Logo;
