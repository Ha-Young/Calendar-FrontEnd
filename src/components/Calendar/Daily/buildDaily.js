export default function buildCalendar(value) {
  const startDay = value.clone().startOf("day");

  return startDay;
}
