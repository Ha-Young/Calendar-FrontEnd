import DailyCalendar from '../components/Main/DailyCalendar';
import { connect } from 'react-redux';
import { showscheduleinfo } from '../Redux/action';

const getDateInfo = (state, id) => {
  return state.byDate[id];
};

const getSchedules = (state) => {
  return state.allDates.map(id => getDateInfo(state, id));
};

const mapStateToProps = (state) => ({
  schedules: getSchedules(state)
});

export default connect(mapStateToProps, { showscheduleinfo })(DailyCalendar);
