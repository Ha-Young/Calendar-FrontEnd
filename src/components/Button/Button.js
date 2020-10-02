import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  margin: 1rem;
`;

export default function Button({ children, onClick }) {
  return (
    <ButtonWrapper>
      <div onClick={onClick}>{children}</div>
    </ButtonWrapper>
  );
}
