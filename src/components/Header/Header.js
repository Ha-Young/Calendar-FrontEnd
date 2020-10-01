import React from "react";
import GetDate from "./GetDate";

export default function Header ({
  year,
  month,
  day,
  handleYesterday,
  handleTomorrow,
}) {

  return (
    <header style={{ width: "100%" }}>
      <GetDate
        year={year}
        month={month}
        day={day}
        handleYesterday={handleYesterday}
        handleTomorrow={handleTomorrow}
      />
    </header>
  );
}
