export default function buildCalendar(end, day) {
  const month = [];
  let start = day;
  if (day !== 0) {
    for (let j = 0; j < day; j++) {
      month.push("empty");
    }
  }
  for (let i = 0; i < end; i++) {
    const newDay = (((start + i) % 7) + 7) % 7;
    month.push([i + 1, newDay]);
  }
  return month;
}
