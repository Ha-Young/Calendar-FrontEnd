import moment from 'moment';

export default function getDatesShown(date, gap) {
  if (gap === 1) {
    return [date];
  } else if (gap === 7) {
    const startOfThisWeek = moment(date).startOf('week');
    const weeklyDates = [];
    for (let i = 0; i < gap; i++) {
      weeklyDates.push(moment(startOfThisWeek).add(i, 'days'));
    }
    return weeklyDates;
  }
}
