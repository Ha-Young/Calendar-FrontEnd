import React from "react";
import DateView from "./DateView";

export default function Header ({
  year,
  month,
  day,
  handleYesterday,
  handleTomorrow,
}) {
  return (
    <header style={{ width: "100%" }}>
      <DateView
        year={year}
        month={month}
        day={day}
        handleYesterday={handleYesterday}
        handleTomorrow={handleTomorrow}
      />
    </header>
  );
}
