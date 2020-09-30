import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.blue};

  .contents {
    background: white;
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
