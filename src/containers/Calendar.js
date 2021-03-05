import { connect } from "react-redux";
import { setScheduleData, setTargetScheduleData } from "../actions";
import Calendar from '../components/Calendar/Calendar';

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  dispatchScheduleData: (scheduleData) => dispatch(setScheduleData(scheduleData)),
  setTargetScheduleData: (targetScheduleData) => dispatch(setTargetScheduleData(targetScheduleData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
