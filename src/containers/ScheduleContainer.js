import Schedule from '../components/Schedule/Schedule';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  dates: state.dates.handleWeeklyDates
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateCalendar: function (type, change) {
      console.log(type, change, 'dispatch')
      dispatch({type, change});
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);