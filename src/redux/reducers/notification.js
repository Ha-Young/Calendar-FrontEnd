import { INIT_NOTIFICATION, NEW_NOTIFICATION } from "../../constants/actionTypes";

const initialState = {
  haveNotification: false,
  message: "",
};

export default function notification(state = initialState, { type, payload }) {
  switch (type) {
    case NEW_NOTIFICATION: 
      return {
        haveNotification: true,
        message: payload.message,
      };
    case INIT_NOTIFICATION:
      return initialState;
    default:
      return {
        ...state,
      };
  } 
}
