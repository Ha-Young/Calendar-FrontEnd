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
  createEventInFirebase: (userId, event) => {
    writeEventFb(userId, event);
  },

  deleteEventInFirebase: (userId, event) => {
    deleteEventFb(userId, event.id);
  },

  initialLoadFromFirebase: async (userId) => {
    return await readEventsFb(userId);
  },

  createEvent: (event) => {
    dispatch(createEvent(event));
  },

  updateEvent: (prevEvent, newEvent) => {
    dispatch(updateEvent(prevEvent, newEvent));
  },

  deleteEvent: (event) => {
    dispatch(deleteEvent(event));
  },

  initEvents: (events) => {
    dispatch(initEvents(events));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
