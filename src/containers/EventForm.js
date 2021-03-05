import { connect } from "react-redux";
import EventForm from "../components/EventForm/EventForm";
import { receiveEventData } from "../actions";

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitEvent: function (eventData) {
      dispatch(receiveEventData(eventData));
    },
  };
};

export default connect(null, mapDispatchToProps)(EventForm);
