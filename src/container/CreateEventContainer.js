import { connect } from 'react-redux';

import CreateEvent from '../components/CreateEvent';

function mapstateToProps(state) {
  return {
    uid: state.user.uid,
  };
}

export default connect(mapstateToProps, null)(CreateEvent);
