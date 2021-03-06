import { connect } from "react-redux";
import Form from "../components/Form/Form";
import { updateEvent, deleteEvent } from "../actions";

const mapDispatchToProps = (dispatch) => ({
  onUpdate: (from, to) => {
    dispatch(updateEvent(from, to));
  },
  onDelete: (event) => {
    dispatch(deleteEvent(event));
  }
});

export default connect(null, mapDispatchToProps)(Form);
