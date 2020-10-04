import React from 'react';
import Hour from '../Shell/Shell';
import styled from 'styled-components';

const EntryWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-contents: center;
  flex-direction: column;
  margin: 2em;
`;

export default function DayList({ today }) {
  const onedayLength = Array.from({length: 24}, (value, i) => i + 1);
  const dateOfToday = today.slice(0, 10);

  return (
    <EntryWrapper>
      {dateOfToday}
      {onedayLength.map(hour =>
        <Hour
          key={hour}
          value={hour}
        />
      )}
    </EntryWrapper>
  );
}
