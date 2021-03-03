import { format, getDate, getDay } from "date-fns";

export default function refineCurrentWeek(currentWeek) {
  const daysOfWeek = 
  [
    "Sunday", "Monday", "Tuesday", 
    "Wednesday", "Thursday", "Friday", "Saturday"
  ];

  return currentWeek.length 
    ? currentWeek.map((val) => {
      return {
        originalDate: val,
        date: getDate(val),
        dayOfWeek: daysOfWeek[getDay(val)],
        formatString: format(val, "yyyy-MM-dd"),
      }
    }) 
    : null;
}
