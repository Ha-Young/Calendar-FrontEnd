import React, { useEffect } from "react";
import Calendar from "./Calendar";

export default function Daily ({
  calendarMode,
  today,
  selectedDate,
  goPrevDate,
  goNextDate,
  setDailyCalendarMode
}) {
  useEffect(() => {
    if (calendarMode === "weekly") {
      setDailyCalendarMode();
    }
  }, []);

  return (
    <Calendar
      today={today}
      selectedDate={selectedDate}
      goPrev={goPrevDate}
      goNext={goNextDate}
    />
  )
};
