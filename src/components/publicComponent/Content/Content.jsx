import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  width: 99%;
  height: 100%;
  background-color: ${({ color }) => color};
  overflow: hidden;
  border-radius: ${({ borderRadius }) => borderRadius};

  &:hover {
    background-color: ${({ className }) => className === 'context' ? 'red' : ''};
  }

  cursor: ${({ cursor }) => cursor};
`;

const Content = ({ className, textContent, color, borderFlag, onClickEvent }) => {
  const borderRadius = calcBorderRadius(borderFlag);
  const cursor = getCursorOption(className, color);

  function calcBorderRadius(borderFlag) {
    if (borderFlag === 1) return '20% 20% 0% 0%';
    if (borderFlag === -1) return '0% 0% 20% 20%';
    return ('0%');
  }

  function getCursorOption(className, color) {
    if (className === 'context' && color) return 'pointer'
    return 'default'
  }

  return (
    <ContentWrapper 
      className={className} 
      color={color || 'none'} 
      borderRadius={borderRadius}
      cursor={cursor}
      onClick={onClickEvent}
    >
      {textContent}
    </ContentWrapper>
  )
};

export default Content;
