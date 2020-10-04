import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background: ${({theme}) => theme.blue};
  color: ${({theme}) => theme.white};
  border: none;
  border-radius: 10px;
  transition: all 0.3s;
  padding: 10px 20px;
  border: 1px solid ${({theme}) => theme.blue};

  &:hover {
    background: ${({theme}) => theme.white};
    color: ${({theme}) => theme.blue};
    cursor: pointer;
  }
`;

export default function Button({ onClick, buttonText }) {
  return (
    <StyledButton onClick={onClick}>{buttonText}</StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};
