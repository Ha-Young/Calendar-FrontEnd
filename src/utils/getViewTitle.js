import moment from 'moment';

import { VIEW_MODES } from '../constants/calendar.constants';

const getViewTitle = (viewMode, date) => {
  if (viewMode === VIEW_MODES.DAILY.title) {
    return moment(date).format('YYYY년 M월 D일');
  }
  if (viewMode === VIEW_MODES.WEEKLY.title) {
    return `${moment(date).weeks()} 번째 주`;
  }
};

export default getViewTitle;
