import { calendar } from "../constants/actionTypes";
import { setCalendar } from "../utils/supportReduce";
import { CALENDAR_STATE_KEY } from "../constants";
const current = new Date();
const initiateState = {
  userEvent: {
    byId: {},
    allId: [],
  },
  calendar: {
    year: current.getFullYear(),
    month: current.getMonth() + 1,
    date: current.getDate(),
    fromHour: current.getHours(),
    toHour: current.getHours(),
  }
};

export default function reducer(state = initiateState, action) {
  const payload = action.payload;

  switch(action.type) {
    case calendar.SET_YEAR:
      return setCalendar(state, CALENDAR_STATE_KEY.YEAR, payload);
    case calendar.SET_MONTH:
      return setCalendar(state, CALENDAR_STATE_KEY.MONTH, payload);
    case calendar.SET_DATE:
      return setCalendar(state, CALENDAR_STATE_KEY.DATE, payload);
    case calendar.SET_FROM_HOUR:
      return setCalendar(state, CALENDAR_STATE_KEY.FROM_HOUR, payload);
    case calendar.SET_TO_HOUR:
      return setCalendar(state, CALENDAR_STATE_KEY.TO_HOUR, payload);
    default:
      return state;
  }
}