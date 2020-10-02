import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .modal-overlay {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    will-change: scroll-position;
    z-index: 10;
    outline: 0;
  }
`;

export default function Modal({ children, clickOverlay }) {
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";

    return () => {
      body.style.removeProperty("overflow");
    };
  }, []);

  return (
    <ModalWrapper>
      <div
        className="modal-overlay"
        onClick={clickOverlay}
      ></div>
      {children}
    </ModalWrapper>
  );
}

Modal.propTypes = {
  children: PropTypes.object,
  clickOverlay: PropTypes.func.isRequired,
};
