import DailyCalendar from '../components/Main/DailyCalendar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  events: state.events
});

export default connect(mapStateToProps, null)(DailyCalendar);
