import { connect } from "react-redux";
import App from "../components/App/App";
import { writeEventFb, readEventsFb, deleteEventFb } from "../api";
import { createEvent, updateEvent, deleteEvent, initEvents } from "../actions/index";

const mapStateToProps = (state) => ({
  allEvents: state.events,
  userId: "Lehends",
});

const mapDispatchToProps = (dispatch) => ({
  // This function is passed to App component.

  initialLoadFromFirebase: async (userId) => {
    return await readEventsFb(userId);
  },

  createEvent: (userId, event) => {
    dispatch(createEvent(event));
    writeEventFb(userId, event);
  },

  updateEvent: (userId, prevEvent, newEvent) => {
    dispatch(updateEvent(prevEvent, newEvent));
    deleteEventFb(userId, prevEvent.id);
    writeEventFb(userId, newEvent);
  },

  deleteEvent: (userId, event) => {
    dispatch(deleteEvent(event));
    deleteEventFb(userId, event.id);
  },

  initEvents: (events) => {
    dispatch(initEvents(events));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
