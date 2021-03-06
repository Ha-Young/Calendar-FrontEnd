import { connect } from "react-redux";
import Calendar from "../components/EventForm/EventForm";
import { submitEventInfo } from "../actions"

const mapStateToProps = (state) => ({
  eventInfo: state.eventInfo
});

const mapDispatchToProps = (dispatch) => ({
  onEventInfoSubmit: (eventInfo) => {
    dispatch(submitEventInfo(eventInfo));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
