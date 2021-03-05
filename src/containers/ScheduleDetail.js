import { connect } from "react-redux";
import { setTargetScheduleData } from "../actions";
import ScheduleDetail from '../components/ScheduleDetail/ScheduleDetail'

const mapStateToProps = (state) => ({
  targetScheduleData: state.targetScheduleData
});

const mapDispatchToProps = (dispatch) => ({
  setTargetScheduleData: (targetScheduleData) => dispatch(setTargetScheduleData(targetScheduleData))
});

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleDetail);
