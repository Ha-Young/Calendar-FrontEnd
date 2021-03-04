import { connect } from 'react-redux';
import EventPage from '../components/Modal/EventPage';

const mapStateToProps  = (state) => ({
  datesInfo: state.byDate
});

export default connect(mapStateToProps, null)(EventPage);
