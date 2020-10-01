import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContents = styled.div`
  padding-top: 50px;
  width: 500px;
  background-color: beige;
  position: relative;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 14px;
  font-size: 30px;
  transform: rotate(45deg);
  cursor: pointer;
`;


export default function Modal ({ children }) {

  return (
    <Wrapper>
      <ModalContents>
        <Link to='/' exact><CloseButton>+</CloseButton></Link>
        {children}
      </ModalContents>
    </Wrapper>
  );
}