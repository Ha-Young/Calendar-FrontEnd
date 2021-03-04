import { connect } from "react-redux";
import ScheduleCreateForm from '../components/scheduleCreateForm/ScheduleCreateForm';

const mapStateToProps = (state) => ({
  currentDate: state.currentDate
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleCreateForm);
