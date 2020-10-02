import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import App from '../components/App';
import * as UserStateActions from '../actions';

function mapStateToProps(state) {
  return {
    isLogin: state.isLogin,
    currentUserID: state.user?.uid,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserStateActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
