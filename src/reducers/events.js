import {
  SUBMIT_EVENT,
} from "../constants/actionTypes";

export default function events(state = {byId: {}, allIds: []}, action) {
  const payload = action.payload;

  switch (action.type) {
    case SUBMIT_EVENT:
      return {
        byId: {
          ...state.byId,
          [payload.id]: {
            title: payload.title,
            content: payload.content,
            start: payload.start,
            end: payload.end,
          }
        },
        allIds: [
          ...state.allIds,
          payload.id
        ],
      };
    default:
      return state;
  }
}

export function sortEvent(payload) {
  return ({
    id: payload.date.format("YYYY-MM-DD"),
    title: payload.title,
    content: payload.content,
    start: Number(payload.start.format("H")),
    end: Number(payload.end.format("H")),
  });
}

export function constructData(event) {
  return {
  };
}
