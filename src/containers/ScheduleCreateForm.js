import { connect } from "react-redux";
import ScheduleCreateForm from '../components/scheduleCreateForm/ScheduleCreateForm';

const mapStateToProps = ({ dateStates }) => ({
  currentDate: dateStates.currentDate
});

export default connect(mapStateToProps, null)(ScheduleCreateForm);
