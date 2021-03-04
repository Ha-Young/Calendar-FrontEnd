import { connect } from 'react-redux';
import Event from '../components/Modal/Event';

const mapStateToProps  = (state) => ({
  eventsInfo: state
});

export default connect(mapStateToProps, null)(Event);
