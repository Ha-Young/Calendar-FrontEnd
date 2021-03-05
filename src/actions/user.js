import { LOGIN_USER } from "../constants/actionTypes";

export function loginUser(user) {
  return {
    type: LOGIN_USER,
    payload: user,
  };
}
