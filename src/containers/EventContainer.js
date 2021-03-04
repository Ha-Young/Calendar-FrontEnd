import { connect } from "react-redux";
import Event from "../components/Event/Event";
import { addToEvent } from "../actions";
import { addEvent, getEventKey } from "../api";

const mapDispatchToProps = dispatch => ({
  onSubmitAddEvent: (eventInformation) => {
    const eventKey = getEventKey();
    const event = {
      ...eventInformation,
      eventId: eventKey
    };

    addEvent(event, eventKey);
    dispatch(addToEvent(event));
  }
});

export default connect(null, mapDispatchToProps)(Event);
