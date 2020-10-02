import { connect } from 'react-redux';
import Header from '../components/Header/Header';
import * as actions from '../actions';

const mapDispatchToProps = dispatch => ({
  clickPrevButton: days => dispatch(actions.moveToPrevPage(days)),
  clickNextButton: days => dispatch(actions.moveToNextPage(days)),
  setWeeklyTheme: theme => dispatch(actions.weeklyCalendarType(theme)),
  setDailyTheme: theme => dispatch(actions.dailyCalendarType(theme))
});

const HeaderContainer = connect(null, mapDispatchToProps)(Header);

export default HeaderContainer;
