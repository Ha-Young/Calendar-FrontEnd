import {LOG_IN, CLICK_PREV_BUTTON, CLICK_NEXT_BUTTON} from "./constants";

export const userLogin = () => {
  return {
    type: LOG_IN,
  }
}

export const moveToPrevDay = () => {
  return {
    type: CLICK_PREV_BUTTON,
  }
}

export const moveToNextDay = () => {
  return {
    type: CLICK_NEXT_BUTTON,
  };
};

// export const login = user => {
//   return {
//     type: types.LOG_IN,
//     user,
//   }
// };
