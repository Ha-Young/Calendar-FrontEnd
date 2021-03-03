import {sub, add, eachDayOfInterval, getDay} from "date-fns";

export default function getWeekFromDate(date) {
  const current = date;
      
  if (!current instanceof Date) {
    throw new Error("date arg is must be Date instance.");
  }

  const start = sub(current, {days: getDay(current)});
  const end = add(start, { days: 6 });
  
  return eachDayOfInterval({
    start,
    end
  });
}
