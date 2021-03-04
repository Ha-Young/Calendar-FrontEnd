export function getDailyEvents(currentDate, userEvent) {
  const events = [];
  for (const key in userEvent) {
    const eventDate = new Date(userEvent[key].period.from).getDate();
    if (currentDate === eventDate) events.push(userEvent[key]);
  }
  return events;
}
