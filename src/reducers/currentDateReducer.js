import { PAGE_BEFORE, PAGE_NEXT, MODE_WEEK, MODE_DAY } from '../constants/ActionType';
import setDateState from '../utils/setDateState';

const dateObj = new Date();
const initialState = {
  dateState: setDateState(dateObj),
  needToFecthing: false,
};
const newDateStateFromPager = (state, direction, mode) => {
  const year = state.dateState.year;
  const month = state.dateState.month;
  const date = state.dateState.date;
  const dateObj = new Date(year, month, date);

  if (direction === PAGE_NEXT && mode === MODE_WEEK) dateObj.setDate(date + 7);
  if (direction === PAGE_NEXT && mode === MODE_DAY) dateObj.setDate(date + 1);
  if (direction === PAGE_BEFORE && mode === MODE_WEEK) dateObj.setDate(date - 7);
  if (direction === PAGE_BEFORE && mode === MODE_DAY) dateObj.setDate(date - 1);

  return setDateState(dateObj);
};

const date = (state = initialState, action) => {
  switch (action.type) {
    case PAGE_NEXT:
      return {
        dateState: newDateStateFromPager(state, action.type, action.mode),
        needToFecthing: !(state.needToFecthing),
      };
    case PAGE_BEFORE:
      return {
        dateState: newDateStateFromPager(state, action.type, action.mode),
        needToFecthing: !(state.needToFecthing),
      };
    default:
      return state;
  }
};

export default date;
