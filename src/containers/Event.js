import { connect } from "react-redux";
import Event from "../components/Event/Event";

const mapStateToProps = (state) => {
  return {
    event: state.selectedEvent,
  };
}

export default connect(mapStateToProps, null)(Event);
