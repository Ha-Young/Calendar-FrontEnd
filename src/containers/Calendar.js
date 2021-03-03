import { connect } from "react-redux";
import { setScheduleData } from "../actions";
import Calendar from '../components/Calendar/Calendar';

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  dispatchScheduleData: (scheduleData) => dispatch(setScheduleData(scheduleData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
