import { connect } from 'react-redux';
import { setDetails, changeDetails } from '../actions';
import { DETAIL_CLOSE } from '../constants/ActionType';
import Details from '../components/Details/Details';

const mapStateToProps = state => {
  return {
    dateState: state.currentDateReducer.dateState,
    details: state.eventPageReducer,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    closeDetails: () => {
      dispatch(setDetails(DETAIL_CLOSE));
    },
    changeDetails: () => {
      dispatch(changeDetails);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
