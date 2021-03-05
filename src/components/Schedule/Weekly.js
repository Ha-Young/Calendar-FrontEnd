import React from "react";
import Calendar from "./Calendar";

export default function Weekly ({
  calendarMode,
  setWeeklyCalendarMode,
  today,
  selectedDate,
  week,
  goLastWeek,
  goNextWeek
}) {

  if (calendarMode === "daily") {
    setWeeklyCalendarMode();
  }

  return (
    <Calendar
      calendarMode={calendarMode}
      today={today}
      selectedDate={selectedDate}
      week={week}
      goPrev={goLastWeek}
      goNext={goNextWeek}
    />
  );
}
