import { connect } from "react-redux";

import { createEvent, deleteEvent, updateEvent } from "../actions/events";
import { removeEvent, writeEvent } from "../api";
import Events from "../components/Events";

const mapStateToProps = state => ({
  events: state.events,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  createEvent: ({ userId, event }) => {
    dispatch(createEvent(event));
    writeEvent(userId, event);
  },
  updateEvent: ({ userId, event }) => {
    dispatch(updateEvent(event));
    writeEvent(userId, event);
  },
  deleteEvent: ({ userId, eventId, date }) => {
    dispatch(deleteEvent(eventId));
    removeEvent(userId, eventId, date);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
