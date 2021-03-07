import { UPDATE_EVENT_FORM, UPDATE_USER_EVENT, DELETE_USER_EVENT, SET_CURRENT_DATE } from "../constants/actionTypes";
import { setEventForm, setUserEvent, deleteUserEvent, setCurrentDate } from "./reducerSupportors";

const today = new Date();

const initiateState = {
  userEvent: {
    byId: {},
    allId: [],
  },
  eventForm: {
    id: "",
    title: "",
    content: "",
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate(),
    fromHour: today.getHours(),
    toHour: today.getHours() + 1,
  },
  currentDate: today,
};

export default function reducer(state = initiateState, action) {
  const payload = action.payload;

  switch(action.type) {
    case UPDATE_EVENT_FORM:
      return setCurrentDate(setEventForm(state, payload));

    case UPDATE_USER_EVENT:
      return setUserEvent(state, payload);

    case DELETE_USER_EVENT:
      return deleteUserEvent(state, payload);

    case SET_CURRENT_DATE:
      const { year, month, date } = payload;
      const updatedDate = new Date(year, month, date);
      return {
        ...state,
        eventForm: {
          ...state.eventForm,
          year: year,
          month: month + 1,
          date: date
        },
        currentDate: updatedDate,
      };

    default:
      return state;
  }
}
