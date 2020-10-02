import { CELL_HEIGHT } from '../constants/calendar.constants';

const getEventBlockStyle = (start, end) => {
  const duration = end - start;

  return {
    top: `${CELL_HEIGHT * start}px`,
    height: `${CELL_HEIGHT * duration}px`,
    zIndex: `${start + 1}`,
  };
};

export default getEventBlockStyle;
