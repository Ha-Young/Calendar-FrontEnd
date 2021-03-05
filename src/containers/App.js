import { connect } from "react-redux";
import App from "../components/App/App";
import { getData } from "../api";
import { setinitialdata } from '../Redux/action';

const mapDispatchToProps = (dispatch) => ({

  onInitialLoad: () => {
    (async function () {
      const data = await getData();

      dispatch(setinitialdata(data));
    })();
  }
});

export default connect(null, mapDispatchToProps)(App);
