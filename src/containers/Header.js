import { connect } from "react-redux";
import { changeCalendarMode } from "../actions";
import Header from '../components/Header/Header';

const mapStateToProps = (state) => ({
  calendarMode: state.calendarMode
});

const mapDispatchToProps = (dispatch) => ({
  changeCalendarMode: (calendarMode) => {
    dispatch(changeCalendarMode(calendarMode));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
