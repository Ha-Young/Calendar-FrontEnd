import { connect } from "react-redux";
import EventDetail from "../../components/EventPage/EventDetail/EventDetail";
import { editEvent, removeEvent } from "../../actions";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchedEditEvent: (event) => dispatch(editEvent(event)),
    deleteEvent: () => dispatch(removeEvent({...ownProps.location.state})),
  };
};

export default connect(null, mapDispatchToProps)(EventDetail);
