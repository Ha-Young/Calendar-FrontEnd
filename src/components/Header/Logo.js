import React from "react";
import styled from "styled-components";
import logoPng from "../../assets/logo.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin: 0.2em 0 0 0.2em;
    font-size: 2.5em;
  }

  img {
    width: 4em;
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
