import { connect } from "react-redux";
import App from "../components/App/App";
import { writeEvents } from "../api";
import { createEvent, updateEvent, deleteEvent } from "../actions/index";

const mapStateToProps = (state) => ({
  allEvents: state.events,
  userId: "Lehends",
});

const mapDispatchToProps = (dispatch) => ({
  // This function is passed to App component.
  createEventForFirebase: (userId) => {
    writeEvents(userId);
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
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
