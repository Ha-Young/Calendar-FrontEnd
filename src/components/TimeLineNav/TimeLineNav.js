import React from 'react';
import styled from 'styled-components';

const TimeLineNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-contents: center;
  flex-direction: column;
  margin: 2em;
`;

export default function TimeLineNav({ value, navLength }) { // 스타일드 컴포넌트로 빼는게 나을지도...
  const timeNavLength = Array.from({length: navLength}, (value, i) => i + 1);

  return (
    <TimeLineNavWrapper>
      <div>
        {timeNavLength.map(item => item)}
      </div>
    </TimeLineNavWrapper>
  );
}
