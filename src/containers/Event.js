import { connect } from "react-redux";
import Event from "../components/Event/Event";
import { submitData } from "../actions";

const mapStateToProps = (state) => {
  return {
    event: state.selectedEvent,
  }
}

export default connect(mapStateToProps, null)(Event);
