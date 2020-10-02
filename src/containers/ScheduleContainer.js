import Schedule from '../components/Schedule/Schedule';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  dates: state.dates.weeklyDates
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateCalendar: function (type, change) {
      dispatch({type, change});
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);