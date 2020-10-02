import { LOG_IN } from "../actions/constants";

const initialState = {
  isLoggdIn: false,
  name: "",
  email: "",
  photo: "",
};

export const authReducer = (state = initialState, action) => {
  if(action.type === LOG_IN) {
    return {
      ...state,
      isLoggedIn: true,
      name: action.text,
      email: action.text,
      photo: action.text,
    };
  }
  return state;
};
