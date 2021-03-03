import { connect } from "react-redux";
import CreateEvent from "../components/CreateEvent/CreateEvent";
import { createEvent } from "../actions";

const mapStateToProps = (state) => ({
  events: state.events,
});

const mapDispatchToProps = (dispatch) => ({
  // This function is passed to App component.
  onSubmit: (value) => {
    dispatch(createEvent(value));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
