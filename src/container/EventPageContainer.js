import { connect } from 'react-redux';

import EventPage from '../components/EventPage';

function mapstateToProps(state) {
  return {
    eventData: state.eventData,
    uid: state.user.uid,
  };
}

export default connect(mapstateToProps, null)(EventPage);
