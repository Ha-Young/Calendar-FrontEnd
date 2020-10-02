import ScheduleList from '../components/Schedule/ScheduleList';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';

const mapStateToProps = (state) => {
  let presentDate = state.dates.monthlyDates.today;
  (presentDate < 10) ? presentDate = '0' + presentDate : presentDate = presentDate.toString();

  let startTime;
  let endTime;
  if (!isEmpty(state.events.events)) {
    startTime = state.events.events[presentDate][0].detail.eventStart.toString().substring(8, 10);
    if (startTime < 10) startTime = '0' + startTime;
    
    endTime = state.events.events[presentDate][0].detail.eventEnd.toString().substring(8, 10);
    if (endTime < 10) startTime = '0' + startTime;
  }

  return {
    eventInfo: state.events.events,
    today: presentDate,
    startTime,
    endTime,
  };
};

export default connect(mapStateToProps, null)(ScheduleList);
