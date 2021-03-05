import { DateTime } from 'luxon';

export function formatDate(date) {
  return DateTime.fromJSDate(date);
}

export function calculateWeek(date, isDailyView) {
  if (isDailyView) return [date];

  const weekYear = date.weekYear;
  const weekNumber = date.weekNumber;
  const selectedWeek = [];

  for (let i = 1; i <= 7; i++) {
    selectedWeek.push(DateTime.fromObject({ weekYear: weekYear, weekNumber: weekNumber, weekday: i }));
  }

  return selectedWeek;
}
