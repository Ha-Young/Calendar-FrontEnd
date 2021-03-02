import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
  font-size: ${(props) => props.fontSize}
`;

const Icon = ({ className, fontSize }) => {
  return (
    <IconWrapper fontSize={fontSize}>
      <i className={className}></i>
    </IconWrapper>
  );
}

export default Icon;
