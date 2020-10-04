import { connect } from 'react-redux';
import { changeMode } from '../actions/index';
import ScheduleModeChanger from '../components/ScheduleModeChanger/ScheduleModeChanger';

const mapDispatchToProps = dispatch => {
  return {
    changeMode: mode => {
      dispatch(changeMode(mode));
    },
  };
};

export default connect(null, mapDispatchToProps)(ScheduleModeChanger);
