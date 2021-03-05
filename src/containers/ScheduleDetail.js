import { connect } from "react-redux";
import ScheduleDetail from '../components/ScheduleDetail/ScheduleDetail'

const mapStateToProps = (state) => ({
  targetScheduleData: state.targetScheduleData
});

export default connect(mapStateToProps, null)(ScheduleDetail);
