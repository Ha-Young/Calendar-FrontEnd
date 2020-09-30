import React from 'react';
import ToggleButton from './ToggleButton';
import GetDate from './GetDate';

export default function Header ({
  yesterday,
  tomorrow,
  handleYesterday,
  handleTomorrow,
}) {
  return (
    <header style={{width: '100%'}}>
      <ToggleButton />
      <GetDate
        yesterday={yesterday}
        tomorrow={tomorrow}
        handleYesterday={handleYesterday}
        handleTomorrow={handleTomorrow}
      />
    </header>
  );
}
