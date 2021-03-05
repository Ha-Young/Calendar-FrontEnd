import { connect } from "react-redux";
import Daily from "../components/Daily/Daily";
import { handleClickLeft, handleClickRight, handleClickEvent } from "../actions";

const mapStateToProps = (state) => ({
  eventList: state.eventList,
  eventKeyList: state.eventKeyList,  
  currentPageDate: state.currentPageDate                                                                                                     
});

export default connect(mapStateToProps, {handleClickLeft, handleClickRight,  handleClickEvent})(Daily);
