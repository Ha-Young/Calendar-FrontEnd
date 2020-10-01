import React, { useState, useCallback } from 'react';
import styled from 'styled-components';



const ModalContents = styled.div`
  padding-top: 50px;
  display: grid;
  grid-template-rows: 15% 5% 50% 15% 15%;
  background-color:pink;
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
  // const toggleModal = useCallback(
  //   (videoInfo) => {
  //     if (isEmpty(modalInfo)) {
  //       return setModalInfo(videoInfo);
  //     }
  //     setModalInfo({});
  //   },
  //   [modalInfo],
  // );
  console.log(children, 'c')
  return (
    <ModalContents>
      <CloseButton>+</CloseButton>
      {children}
    </ModalContents>
  );
}