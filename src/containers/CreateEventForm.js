import { connect } from "react-redux";
import Form from "../components/Form/Form";
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

export default connect(mapStateToProps, mapDispatchToProps)(Form);
