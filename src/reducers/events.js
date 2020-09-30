
import { LOG_IN, CLICK_PREV_BUTTON, CLICK_NEXT_BUTTON } from "../actions/constants";
import { format, addDays, subDays } from "date-fns";

const initialState = {
  date: new Date,
}

const changeDate = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_PREV_BUTTON:
      return {
        ...state,
        date: subDays(state.date, 1),
      };
    case CLICK_NEXT_BUTTON:
      return {
        ...state,
        date: addDays(state.date, 1),
      };
    default:
      return state;
  }
}

export default changeDate;







// let getYear = "";
  // let getMonth = "";
  // let getDay = "";
  // let today = new Date();

  // getYear = format(today, "yyyy");
  // getMonth = format(today, "MMM");
  // getDay = format(today, "do")


  // const handleNextDay = () => {
  //   console.log(getDay)
  //   let tomorrow = addDays(today, 1);
  //   getDay = format(tomorrow, "do");
  //   today = addDays(today, 1);
  // }

  // const handlePrevDay = () => {
  //   console.log(getDay)
  //   let yesterday = subDays(today, 1)
  //   getDay = format(yesterday, "do");
  //   today = subDays(today, 1)₩
  // }