import { ERROR, LOGIN, LOGOUT } from "../../constants/actionTypes";
import { GUEST } from "../../constants/login";

const initialUserId = localStorage.getItem("userId") || GUEST;
const isLoggedIn = initialUserId === GUEST ? false : true;

const initialState = {
  userId: initialUserId,
  isLoggedIn,
  isError: false,
  error: {},
};

export default function login(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN:
      return {
        ...initialState,
        userId: payload.userId,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...initialState,
        userId: GUEST,
        isLoggedIn: false,
      };
    case ERROR:
      return {
        ...state,
        isError: true,
        error: payload.error,
      };
    default:
      return {
        ...state,
      };
  }
}
