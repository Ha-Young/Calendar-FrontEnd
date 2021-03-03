import WeeklyCalendar from '../components/Main/WeeklyCalendar';
import { connect } from 'react-redux';
import {
  ADD_TITLE,
  ADD_DESCRIPTION,
  ADD_STARTDATE,
  ADD_ENDDATE
} from '../Redux/action';

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = {
  ADD_TITLE,
  ADD_DESCRIPTION,
  ADD_STARTDATE,
  ADD_ENDDATE
}

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyCalendar);
