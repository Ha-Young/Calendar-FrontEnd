import React from 'react';
import styled from 'styled-components';

const TimeLineNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-contents: center;
  flex-direction: column;
  margin: 2em;
`;

export default function TimeLineNav({ value, navLength }) {
  const timeNavLength = Array.from({length: navLength}, (value, i) => i + 1);

  return (
    <TimeLineNavWrapper>
      <div>
        {timeNavLength.map(item => item)}
      </div>
    </TimeLineNavWrapper>
  );
}
