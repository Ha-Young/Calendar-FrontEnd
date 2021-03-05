import { connect } from "react-redux";
import Schedule from "../components/Schedule/Schedule";
import { saveEvent } from "../actions/";

const mapStateToProps = (state) => ({
  eventsInStore: state.event.events,
  userId: state.login.userInfo.userId,
});

const mapDispatchToProps = (dispatch) => ({
  saveEventInStore(date, eventList) {
    dispatch(saveEvent(date, eventList));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
