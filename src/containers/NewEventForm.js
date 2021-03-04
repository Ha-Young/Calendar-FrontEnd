import { connect } from "react-redux";

import { submitEvent } from "../actions/index";
import { sortEvent } from "../reducers/events";
import NewEventForm from "../components/NewEventForm/NewEventForm";

const mapStateToProps = (state) => ({
  date: state.date,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (event) => {
    const sorted = sortEvent(event);

    return dispatch(submitEvent(sorted));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewEventForm);
