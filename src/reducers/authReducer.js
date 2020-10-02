import { LOG_IN } from "../actions/constants";

const initialState = {
  isLogIn: false,
  name: "",
  email: "",
  photo: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLogIn: true,
        name: action.text,
        email: action.text,
        photo: action.text,
      };
    default:
      return state;
  }
};
