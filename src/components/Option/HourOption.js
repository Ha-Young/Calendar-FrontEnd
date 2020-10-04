import React from 'react';

import Option from './Option';

export default function HourOption() {
  const hours = Array(24).fill(null).map((_, hour) => {
    return String(hour);
  });

  return (
    <Option options={hours} />
  );
}
