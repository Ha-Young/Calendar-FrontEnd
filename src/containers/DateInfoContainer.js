import { connect } from 'react-redux';
import DateInfo from '../components/DateInfo/DateInfo';

const mapStateToProp = state => {
  return {
    mode: state.modes.mode,
    year: state.date.dateState.year,
    month: state.date.dateState.month + 1,
    date: state.date.dateState.date,
    betweenState: state.date.dateState.betweenState,
  };
};

export default connect(mapStateToProp, null)(DateInfo);
