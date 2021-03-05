import { connect } from "react-redux";
import Login from "../components/Login/Login";
import { saveUserId } from "../actions";

const mapDispatchToProps = (dispatch) => ({
  saveUserId(userId) {
    dispatch(saveUserId(userId));
  }
});

export default connect (null, mapDispatchToProps)(Login);
