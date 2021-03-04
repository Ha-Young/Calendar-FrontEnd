import { connect } from "react-redux";
import Weekly from "../components/Weekly/Weekly";

const mapStateToProps = (state) => {
  return {
    events: state.eventlist,  
    currentPageDate: state.currentPageDate,                                                                                                                         
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClickLeft: () => {
      dispatch({
        type: "CLICK_LEFT_WEEK"
      });
    },
    handleClickRight: () => {
      dispatch({
        type: "CLICK_RIGHT_WEEK"
      });
    },
    saveDataToReduxState: (newEventlist) => {
      dispatch({
        type: "SAVE_DATA_TO_REDUX_STATE",
        eventlist: newEventlist,
      });
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Weekly);
