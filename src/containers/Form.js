import { connect } from "react-redux";
import Form from "../components/Form/Form";

const mapDispatchToProps = (dispatch) => {
  return {
    onEventSubmit: (content) => {
      dispatch({
        type: "SAVE_RECORD",
        content: content,
      });
    },
  }
}

export default connect(null, mapDispatchToProps)(Form);
