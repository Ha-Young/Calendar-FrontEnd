import { connect } from "react-redux";
import App from "../components/App/App";
import { getDBData } from "../api";
import { getDBEvent } from "../actions";

const mapDispatchToProps = (dispatch) => {
  return {
    onInitialLoad: () => {
      getDBData()
      .then(result => {
        if (result) {
          dispatch(getDBEvent(result));
        }
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
