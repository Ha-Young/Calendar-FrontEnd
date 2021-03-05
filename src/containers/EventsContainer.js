import { connect } from "react-redux";

import { createdEvent, deletedEvent, updatedEvent } from "../actions/events";
import { removeEvent, updateEvent, writeEvent } from "../api";
import Events from "../components/Events";

const mapStateToProps = state => ({
  events: state.events,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  createEvent: async ({ userId, event }) => {
    const newEventId = await writeEvent(userId, event);
    event.id = newEventId;
    dispatch(createdEvent(event));
  },
  updateEvent: async ({ userId, event }) => {
    await updateEvent(userId, event);
    dispatch(updatedEvent(event));
  },
  deleteEvent: async ({ userId, eventId, date }) => {
    await removeEvent(userId, eventId, date);
    dispatch(deletedEvent({ date, eventId }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
