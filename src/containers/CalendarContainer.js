import { connect } from 'react-redux';
import Calendar from '../components/Calendar/Calendar';

const mapStateToProps = state => {
  return {
    mode: state.calendarModeReducer.mode,
    dateState: state.currentDateReducer.dateState,
  };
};

export default connect(mapStateToProps, null)(Calendar);
