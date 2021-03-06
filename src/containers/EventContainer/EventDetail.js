import { connect } from "react-redux";
import EventDetail from "../../components/EventPage/EventDetail/EventDetail";
import { editEvent, removeEvent } from "../../actions";

const mapDispatchToProps = (dispatch, ownProps) => {
  const event = {...ownProps.location.state};

  return {
    dispatchedEditEvent: (event) => dispatch(editEvent(event)),
    deleteEvent: () => {
      dispatch(removeEvent(event));
      ownProps.history.goBack();
    },
  };
};

export default connect(null, mapDispatchToProps)(EventDetail);
