import { connect } from 'react-redux';
import Calendar from '../components/Calendar/Calendar';
import { getWeeks } from '../utils/date';

const mapStateToProps = state => ({
  list: state.calendar.currentType.isDaily
  ? [state.calendar.date]
  : getWeeks(state.calendar.date)
});

const CalendarContainer = connect(mapStateToProps, null)(Calendar);

export default CalendarContainer;
