import { connect } from "react-redux";
import App from "../components/App/App";
import { setInitialData } from "../actions";
import { saveSampleData } from "../api";

const mapDispatchToProps = dispatch => ({
  onInitialLoad: () => {
    (async function () {
      const data = await saveSampleData();

      dispatch(setInitialData(data));
    })();
  },
});

export default connect(null, mapDispatchToProps)(App);
