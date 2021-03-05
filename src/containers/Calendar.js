import { connect } from "react-redux";
import { setScheduleData, getTargetScheduleData } from "../actions";
import Calendar from '../components/Calendar/Calendar';

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  dispatchScheduleData: (scheduleData) => dispatch(setScheduleData(scheduleData)),
  getTargetScheduleData: (targetScheduleData) => dispatch(getTargetScheduleData(targetScheduleData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
