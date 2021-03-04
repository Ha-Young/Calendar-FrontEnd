import { connect } from "react-redux";
import CreateEvent from "../components/CreateEvent/CreateEvent";
import { createEvent } from "../actions";

const mapDispatchToProps = (dispatch) => ({
  // This function is passed to App component.
  onSubmit: (value) => {
    dispatch(createEvent(value));
  },
});


export default connect(null, mapDispatchToProps)(CreateEvent);
