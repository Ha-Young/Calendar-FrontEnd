function getWeekDay(year, month, date) {
  return new Intl.DateTimeFormat('ko-KR', {weekday: 'short'}).format(year, month, date);
}

export default getWeekDay;