
export default function makeCalendar () {
  let today = new Date();
  let firstDay = new Date(today.getFullYear(), today.getMonth(),1);
  const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const notLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const defaultFirstDay = firstDay;
  let defaultYear;
  !(firstDay.getFullYear() % 4) ? defaultYear = leapYear : defaultYear = notLeapYear;

}