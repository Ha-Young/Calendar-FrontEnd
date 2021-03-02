import React from 'react';
import styled from 'styled-components';

const RoundShapeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 70%;
  overflow: hidden;
  background-color: skyblue;
`;

const RoundShape = ({ className, textContext }) => {
  // 둥근 모양으로 일자를 하나씩 찍어낸다
  return (
    <RoundShapeWrapper className={className}>
      {textContext}
    </RoundShapeWrapper>
  );
};

export default RoundShape;
