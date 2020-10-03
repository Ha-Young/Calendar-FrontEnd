export default function checkDailyEvent(event, updateDate) {
  const todayEventTime = [];
  const year = new Date().getFullYear();
  let newDateFormat;

  for (let keys in event) {
    let date = event[keys].date.split('-');
    if (String(updateDate.date).length === 1) {
      newDateFormat = '0' + updateDate.date;
    }

    const hasEventOnThisDailyPage = (
      date[0] === String(year) &&
      date[1] === String(updateDate.monthDaily + 1) &&
      date[2] === newDateFormat
    );

    if (hasEventOnThisDailyPage) {
      let timeArray = [event[keys].startTime, event[keys].endTime];
      todayEventTime.push(timeArray);
    }
  }

  return todayEventTime;
}

