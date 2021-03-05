import { connect } from "react-redux";

import { deleteEvent, editEvent } from "../actions/index";
import { sortEvent } from "../reducers/events";
import EventDetail from "../components/EventDetail/EventDetail";

const mapStateToProps = (state) => ({
  event: state.events.targetEvent,
});

const mapDispatchToProps = (dispatch) => ({
  onEditSubmit: (event, prevId) => {
    const sorted = sortEvent(event);

    return dispatch(editEvent(sorted, prevId));
  },
  onDeleteEvent: (date, prevId) => dispatch(deleteEvent(date, prevId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
