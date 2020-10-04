import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.blue};

  .contents {
    background: ${({theme}) => theme.white};
    border-radius: 10px;
    width: 60%;
    height: 70%;
  }
`;

export default function InfoPage({ children }) {
  return (
    <Container>
      <div className='contents'>
        {children}
      </div>
    </Container>
  );
}

InfoPage.propTypes = {
  children: PropTypes.node.isRequired,
};
