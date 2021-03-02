import React from "react";

import { getDayOfTheWeek, getDays } from "../../utils/date";

function TheDate({ date, today = false, ...rest }) {
  const dayOfTheWeek = getDayOfTheWeek(date);
  const days = getDays(date);

  return (
    <div {...rest}>
      <div>{dayOfTheWeek}</div>
      <div>{days}</div>
    </div>
  );
}

export default TheDate;
