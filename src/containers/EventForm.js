import { connect } from "react-redux";

import { submitEvent } from "../actions/index";
import EventForm from "../components/EventForm/EventForm";

const mapStateToProps = (state) => ({
  date: state.date,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (event) => dispatch(submitEvent(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
