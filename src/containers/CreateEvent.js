import { connect } from "react-redux";
import CreateEvent from "../components/CreateEvent/CreateEvent";
import { createEvent } from "../actions";

const mapStateToProps = (state) => ({
  currentDay: state.currentDay,
});

const mapDispatchToProps = (dispatch) => ({
  // This function is passed to App component.
  onSubmit: (event) => {
    // db.saveEvents(value);
    dispatch(createEvent(event));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
