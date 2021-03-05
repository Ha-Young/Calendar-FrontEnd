import { connect } from "react-redux";

import { viewError } from "../actions/error";
import { createdEvent, deletedEvent, updatedEvent } from "../actions/events";
import { startLoading, stopLoading } from "../actions/loading";
import { removeEvent, updateEvent, writeEvent } from "../api";
import Events from "../components/Events";
import { ERROR_MSG_GET_API_ERROR } from "../constants/errorMsg";

const mapStateToProps = state => ({
  events: state.events,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  createEvent: async ({ userId, event }) => {
    dispatch(startLoading());
    try {
      const newEventId = await writeEvent(userId, event);
      event.id = newEventId;
      dispatch(createdEvent(event));
    } catch {
      dispatch(viewError(ERROR_MSG_GET_API_ERROR));
    } finally {
      dispatch(stopLoading());
    }
  },
  updateEvent: async ({ userId, event }) => {
    dispatch(startLoading());
    try {
      await updateEvent(userId, event);
      dispatch(updatedEvent(event));
    } catch {
      dispatch(viewError(ERROR_MSG_GET_API_ERROR));
    } finally {
      dispatch(stopLoading());
    }
  },
  deleteEvent: async ({ userId, eventId, date }) => {
    dispatch(startLoading());
    try {
      await removeEvent(userId, eventId, date);
      dispatch(deletedEvent({ date, eventId }));
    } catch {
      dispatch(viewError(ERROR_MSG_GET_API_ERROR));
    } finally {
      dispatch(stopLoading());
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
