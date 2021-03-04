import { connect } from "react-redux";
import DetailEvent from "../components/Event/DetailEvent";
import { addToEvent, removeToEvent } from "../actions";
import { addEvent } from "../api";

const mapStateToProps = state => ({
  eventInformation: state
});

const mapDispatchToProps = dispatch => ({
  onSubmitAddEvent: (eventInformation) => {
    dispatch(addToEvent(eventInformation));
  },
  onSubmitRemoveEvent: (eventInformation) => {
    dispatch(removeToEvent(eventInformation));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailEvent);
