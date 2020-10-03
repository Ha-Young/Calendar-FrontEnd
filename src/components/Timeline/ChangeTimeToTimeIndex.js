import { time } from '../../constants';

export default function ChangeTimeToTimeIndex(eventTimeInfo) {
  const eventTimeIndexArray = [];
  let startTime;
  let endTime;

  for (let i = 0; i < eventTimeInfo.length; i++) {
    if (eventTimeInfo[i][0].includes('30')) {
      startTime = Number(eventTimeInfo[i][0].slice(0, 2)) + 0.5;
    } else startTime = Number(eventTimeInfo[i][0].slice(0, 2));

    if (eventTimeInfo[i][1].includes('30')) {
      endTime = Number(eventTimeInfo[i][1].slice(0, 2)) + 0.5;
    } else endTime = Number(eventTimeInfo[i][1].slice(0, 2));

    let eventTimeIndex = time.indexOf(startTime);

    for (let i = 0; i < time.indexOf(endTime) - time.indexOf(startTime); i++) {
      eventTimeIndexArray.push(eventTimeIndex);
      eventTimeIndex++;
    }
  }

  return eventTimeIndexArray;
}
