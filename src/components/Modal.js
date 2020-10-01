import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: rgba(1, 1, 1, 0.5);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    height: 20%;
    width: 70%;
    background: white;
    border-radius:10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export default function Modal({ children }) {
  return (
    <Wrapper>
      <section>
        {children}
      </section>
    </Wrapper>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
