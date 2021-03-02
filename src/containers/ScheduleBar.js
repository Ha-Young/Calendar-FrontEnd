import { connect } from "react-redux";

import ScheduleBar from "../components/SchedulesBar/SchedulesBar";

const mapStateToProps = (state) => ({
  date: state.date,
});

export default connect(mapStateToProps, null)(ScheduleBar);
