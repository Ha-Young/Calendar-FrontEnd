import { connect } from "react-redux";

import Schedule from "../components/Schedule";
import { getVisibleEventsEachDay } from "../reducers";

const mapStateToProps = state => ({
  viewOption: state.viewOption,
  currentDate: state.currentDate,
  eventListEachDay: getVisibleEventsEachDay(state.date, state.events),
});

export default connect(mapStateToProps, null)(Schedule);
