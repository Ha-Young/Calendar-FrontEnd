import { START_LOADING, STOP_LOADING } from "../constants/actionTypes";

export function startLoading() {
  return {
    type: START_LOADING,
  };
}

export function stopLoading() {
  return {
    type: STOP_LOADING,
  };
}
