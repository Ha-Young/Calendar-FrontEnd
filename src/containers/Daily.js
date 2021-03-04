import { connect } from "react-redux";
import Daily from "../components/Daily/Daily";

const mapStateToProps = (state) => ({
  events: state.eventlist,
  currentPageDate: state.currentPageDate,                                                                                                                   
});

const mapDispatchToProps = (dispatch) => {
  return {
    saveDataToReduxState: (eventlist) => {
      dispatch({
        type: "SAVE_DATA_TO_REDUX_STATE",
        eventlist: eventlist,
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Daily);
