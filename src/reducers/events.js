
import { CLICK_PREV_BUTTON, CLICK_NEXT_BUTTON, ADD_EVENT } from "../actions/constants";
import { addDays, subDays } from "date-fns";

// login 기능 가져오기..

const initialState = {
  date: new Date(),
}

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_PREV_BUTTON:
      return {
        ...state,
        date: subDays(state.date, 1),
      }
    case CLICK_NEXT_BUTTON:
      return {
        ...state,
        date: addDays(state.date, 1),
      };
    case ADD_EVENT:
      return {
        ...state,
      }
    default:
      return state;
  }
}

export default eventsReducer;







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
