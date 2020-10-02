import { connect } from 'react-redux';
import { setPager } from '../actions';
import { PAGE_NEXT, PAGE_BEFORE } from '../constants/ActionType';
import Pager from '../components/Pager/Pager';

const mapStateToProps = state => {
  return {
    mode: state.calendarModeReducer.mode,
    dateState: state.currentDateReducer.dateState,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    pageBefore: mode => {
      dispatch(setPager(PAGE_BEFORE, mode));
    },
    pageNext: mode => {
      dispatch(setPager(PAGE_NEXT, mode));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pager);
