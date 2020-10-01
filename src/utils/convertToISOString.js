import moment from 'moment';

const convertToISOString = {
  Dates: date => moment(date).format('YYYY-MM-DD'),
  Times: date => moment(date).format('YYYY-MM-DDTHH'),
  ExtendedTimes: date => moment(date).format('YYYY-MM-DDTHH:mm:ss'),
};

export default convertToISOString;
