import { connect } from "react-redux";
import Form from "../components/Form/Form";
import { createEvent } from "../actions";

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (event) => {
    dispatch(createEvent(event));
  },
});

export default connect(null, mapDispatchToProps)(Form);
