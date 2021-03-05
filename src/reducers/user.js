import { LOGIN_USER } from "../constants/actionTypes";

export default function user(state = null, action) {
  switch(action.type) {
    case LOGIN_USER:
      return { ...action.payload };

    default:
      return state;
  }
}
