import { connect } from "react-redux";

import ScheduleBar from "../components/SchedulesBar/SchedulesBar";
import { getKeyFormat } from "../utils/date";

const mapStateToProps = (state) => ({
  date: state.date,
  events: state.events[getKeyFormat(state.date)],
});

export default connect(mapStateToProps, null)(ScheduleBar);
