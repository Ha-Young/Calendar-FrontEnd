import { connect } from "react-redux";
import ScheduleCreateForm from '../components/scheduleCreateForm/ScheduleCreateForm';

const mapStateToProps = (state) => ({
  currentDate: state.currentDate
});

export default connect(mapStateToProps, null)(ScheduleCreateForm);
