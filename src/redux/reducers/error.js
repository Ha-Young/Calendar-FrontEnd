import { NEW_ERROR, NO_ERROR } from "../../constants/actionTypes";

const initialState = {
  isError: false,
  message: "",
  code: "",
}

export default function error(state = initialState, {type, payload}) {
  switch (type) {
    case NEW_ERROR: 
      const { message, code } = payload;
      return {
        isError: true,
        message: message,
        code: code,
      };
    case NO_ERROR:
      return initialState;
    default:
      return {
        ...state,
      };
  } 
}
