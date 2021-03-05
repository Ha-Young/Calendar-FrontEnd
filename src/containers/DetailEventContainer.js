import { connect } from "react-redux";
import { addEvent, removeEvent } from "../actions";
import DetailEvent from "../components/Event/DetailEvent";
import { addEventDatabase, getEventKey, removeEventDatabase } from "../api";

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

    addEventDatabase(event, eventKey);
    dispatch(addEvent(event));
  },
  onSubmitRemoveEvent: (eventInformation) => {
    removeEventDatabase(eventInformation);
    dispatch(removeEvent(eventInformation));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailEvent);
