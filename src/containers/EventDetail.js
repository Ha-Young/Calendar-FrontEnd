import { connect } from "react-redux";

import { deleteEvent, editEvent } from "../actions/index";
import { updateData } from "../api/index"
import EventDetail from "../components/EventDetail/EventDetail";

const mapStateToProps = (state) => ({
  event: state.events.targetEvent,
});

const mapDispatchToProps = (dispatch) => ({
  onEditSubmit: (event, prevId) => {
    const { date, start: id } = event;

    updateData({date, id, event, prevId});

    return dispatch(editEvent(event, date, prevId));
  },
  onDeleteEvent: (date, prevId) => dispatch(deleteEvent(date, prevId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
