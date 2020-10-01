import Calendar from '../components/Calendar/Calendar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  dates: state.dates.handleMonthlyDates
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateCalendar: function (type, change) {
      console.log(type, change, 'dispatch')
      dispatch({type, change});
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);