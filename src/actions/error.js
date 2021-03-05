import { RESET_ERROR, VIEW_ERROR } from "../constants/actionTypes";

export function viewError(errMsg) {
  return {
    type: VIEW_ERROR,
    payload: errMsg,
  };
}

export function resetError() {
  return {
    type: RESET_ERROR,
  };
}
