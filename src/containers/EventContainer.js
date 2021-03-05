import { connect } from "react-redux";
import Event from "../components/Event/Event";
import { addEvent } from "../actions";
import { addEventDatabase, getEventKey } from "../api";

const mapDispatchToProps = dispatch => ({
  onSubmitAddEvent: (eventInformation) => {
    const eventKey = getEventKey();
    const event = {
      ...eventInformation,
      eventId: eventKey
    };

    addEventDatabase(event, eventKey);
    dispatch(addEvent(event));
  }
});

export default connect(null, mapDispatchToProps)(Event);
