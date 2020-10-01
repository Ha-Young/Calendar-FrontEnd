import moment from 'moment';

const convertToISOString = {
  Dates: date => moment(date).format('YYYY-MM-DD'),
  Times: date => moment(date).format('YYYY-MM-DDTHH'),
  // ExtendedTimes: date => moment(date).format('YYYY-MM-DDTHH:mm:ss'),
  combine: (date, hour) => `${date}T${hour.padStart(2, '0')}`,
};

export default convertToISOString;
