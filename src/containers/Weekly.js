import { connect } from "react-redux";
import Weekly from "../components/Weekly/Weekly";
import { handleClickLeft, handleClickRight, handleClickEvent } from "../actions";

const mapStateToProps = (state) => {
  return {
    events: state.eventList,  
    keys: state.eventKeyList,
    currentPageDate: state.currentPageDate,                                                                                                                         
  }
}

export default connect(mapStateToProps, {handleClickLeft, handleClickRight, handleClickEvent })(Weekly);
