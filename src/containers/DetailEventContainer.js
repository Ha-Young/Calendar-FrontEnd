import { connect } from "react-redux";
import DetailEvent from "../components/Event/DetailEvent";
import { addToEvent, removeToEvent } from "../actions";

const mapDispatchToProps = dispatch => ({
  onSubmitAddEvent: (eventInformation) => {
    dispatch(addToEvent(eventInformation));
  },
  onSubmitRemoveEvent: (eventInformation) => {
    dispatch(removeToEvent(eventInformation));
  }
});

export default connect(null, mapDispatchToProps)(DetailEvent);
