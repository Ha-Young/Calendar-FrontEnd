import React from "react";
import styled from "styled-components";
import logoPng from "../../assets/logo.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 3em;
  }

  img {
    width: 4em;
  }
`;

const Logo = () => {
  return (
    <Wrapper>
      <p>Calendar</p>
      <img src={logoPng} alt="logo.png" />
    </Wrapper>
  );
}

export default Logo;
