import { connect } from 'react-redux';
import { setDetails } from '../actions/index';
import SchdeuleTimeItme from '../components/ScheduleTimeItem/ScheduleTimeItem';
import { DETAIL_OPEN } from '../constants/ActionType';

const mapStateToProps = state => {

};
const mapDispatchProps = dispatch => {
  return {
    openDetails: () => dispatch(setDetails(DETAIL_OPEN)),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(SchdeuleTimeItme);