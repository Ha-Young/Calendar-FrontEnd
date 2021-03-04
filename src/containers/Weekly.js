import { connect } from "react-redux";
import Weekly from "../components/Weekly/Weekly";

const mapStateToProps = (state) => {
  return {
    events: state.events,  
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
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Weekly);
