import getDatesOfWeek from '../utils/getDatesOfWeek';

let todayDate = new Date();
const todayDateObj = {
  year: todayDate.getFullYear(),
  month: todayDate.getMonth() + 1,
  date: todayDate.getDate(),
  day: todayDate.getDay(),
}
const initialState = {
  todayDate: todayDateObj,
  calendarDate: todayDateObj,
  weekState: getDatesOfWeek(todayDateObj),
};

const date = (state = initialState, action) => {
  console.log(state,'??');
  console.log(state);
  switch (action.type) {
    default:
      return state;
  }
};

export default date;