import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Calendar from '../components/Calendar';
import * as CalendarActions from '../actions';

function mapStateToProps(state) {
  return {
    isWeekly: state.isWeekly,
    currentDate: state.currentDate,
    eventData: state.eventData,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CalendarActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
