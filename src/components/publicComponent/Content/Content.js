import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  width: 99%;
  background-color: ${(props) => props.color};
  overflow: hidden;
  border-radius: ${({ borderFlg }) => {
    if (borderFlg === 1) return ('20% 20% 0% 0%');
    if (borderFlg === -1) return ('0% 0% 20% 20%');
    return ('0%');
  }};

  &:hover {
    background-color: ${(props) => props.hover ? 'red' : ''};
  }

  cursor: ${(props) => props.hover ? 'pointer' : 'default'};
`;

const Content = ({ className, textContent, color, hover, borderFlg }) => {
  return (
    <ContentWrapper 
      className={className} 
      color={color || 'none'} 
      hover={hover}
      borderFlg={borderFlg}
    >
      {textContent}
    </ContentWrapper>
  )
};

export default Content;
