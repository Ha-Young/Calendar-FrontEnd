import WeeklyCalendar from '../components/Main/WeeklyCalendar';
import { connect } from 'react-redux';

const getDateInfo = (state, id) => {
  return state.byDate[id];
};

const getSchedules = (state) => {
  return state.allDates.map(id => getDateInfo(state, id));
};

const mapStateToProps = (state) => ({
  schedules: getSchedules(state)
});

export default connect(mapStateToProps, null)(WeeklyCalendar);
