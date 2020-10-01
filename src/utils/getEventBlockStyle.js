import moment from 'moment';

import { CELL_HEIGHT } from '../constants/calendar.constants';

const getEventBlockStyle = (start, end) => {
  const startHour = moment(start).hour();
  const endHour = moment(end).hour();
  const duration = endHour - startHour;

  return {
    top: `${CELL_HEIGHT * startHour}px`,
    height: `${CELL_HEIGHT * duration}px`,
    zIndex: `${start + 1}`,
  };
};

export default getEventBlockStyle;
