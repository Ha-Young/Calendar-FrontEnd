export default function event(state = { eventMode: "create" }, action) {
  switch (action.type) {
    case "SET_CREATE_EVENT_MODE":
      return {
        ...state,
        eventMode: "create",
      }
    case "SET_UPDATE_EVENT_MODE":
      return {
        ...state,
        eventMode: "update",
      }
    default:
      return state;
  }
}
