import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
  font-size: ${(props) => props.fontSize};
  opacity: 1;
`;

const Icon = ({ className, fontSize }) => {
  return (
    <IconWrapper fontSize={fontSize}>
      <i className={className}></i>
    </IconWrapper>
  );
}

export default Icon;
