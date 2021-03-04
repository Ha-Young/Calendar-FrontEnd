import { connect } from "react-redux";
import DetailEvent from "../components/Event/DetailEvent";
import { addToEvent, removeToEvent } from "../actions";
import { addEvent, getEventKey } from "../api";

const mapStateToProps = state => ({
  eventInformation: state
});

const mapDispatchToProps = dispatch => ({
  onSubmitAddEvent: (eventInformation) => {
    const eventKey = getEventKey();
    const event = {
      ...eventInformation,
      eventId: eventKey
    };

    addEvent(event, eventKey);
    dispatch(addToEvent(event));
  },
  onSubmitRemoveEvent: (eventInformation) => {
    dispatch(removeToEvent(eventInformation));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailEvent);
