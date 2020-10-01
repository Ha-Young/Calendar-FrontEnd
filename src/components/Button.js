import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  button {
    background: ${({theme}) => theme.blue};
    color: white;
    border: none;
    border-radius: 10px;
    transition: all 0.3s;
    padding: 10px 20px;
    border: 1px solid ${({theme}) => theme.blue};

    &:hover {
      background: white;
      color: ${({theme}) => theme.blue};
      cursor: pointer;
    }
  }
`;

export default function Button({ onClick, value }) {
  return (
    <Wrapper>
      <button onClick={onClick}>{value}</button>
    </Wrapper>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
