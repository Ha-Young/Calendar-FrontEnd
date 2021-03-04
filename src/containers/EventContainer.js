import { connect } from "react-redux";
import Event from "../components/Event/Event";
import { addToEvent } from "../actions";

const mapDispatchToProps = dispatch => ({
  onSubmitEvent: (eventInformation) => {
    dispatch(addToEvent(eventInformation));
  }
});

export default connect(null, mapDispatchToProps)(Event);
