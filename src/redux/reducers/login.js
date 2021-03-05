import { ERROR, LOGIN, LOGOUT } from "../../constants/actionTypes";
import { GUEST } from "../../constants/login";

const initialUserId = localStorage.getItem("userId") || GUEST;
const isLoggedIn = initialUserId === GUEST ? false : true;

const initialState = {
  userId: initialUserId,
  isLoggedIn,
};

export default function login(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN:
      return {
        userId: payload.userId,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        userId: GUEST,
        isLoggedIn: false,
      };
    default:
      return {
        ...state,
      };
  }
}
