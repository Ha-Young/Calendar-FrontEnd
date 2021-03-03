import WeeklyCalendar from '../components/Main/WeeklyCalendar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  events: state.events
});

export default connect(mapStateToProps, null)(WeeklyCalendar);
