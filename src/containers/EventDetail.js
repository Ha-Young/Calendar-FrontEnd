import { connect } from "react-redux";

import { submitEvent } from "../actions/index";
import { sortEvent } from "../reducers/events";
import EventDetail from "../components/EventDetail/EventDetail";

const mapStateToProps = (state) => ({
  event: state.events.targetEvent,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (event) => {
    const sorted = sortEvent(event);

    return dispatch(submitEvent(sorted));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
