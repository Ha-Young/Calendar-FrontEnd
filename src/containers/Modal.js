import { connect } from "react-redux";
import Modal from "../components/Modal/Modal";

const mapStateToProps = (state) => {
  return {
    events: state.selectedEvent,                                                                                                                       
  }
}

export default connect(mapStateToProps, null)(Modal);
