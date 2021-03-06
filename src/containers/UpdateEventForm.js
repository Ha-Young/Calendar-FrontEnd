import { connect } from "react-redux";
import Form from "../components/Form/Form";
import { getEventData, createEvent } from "../actions";

const mapStateToProps = (state) => ({
  currentDay: state.currentDay,
  oneEvent: state.oneEvent,
});

const mapDispatchToProps = (dispatch) => ({
  getTimeEvent: (date, time) => {
    dispatch(getEventData(date, time));
  },
  onSubmit: (event) => {
    // db.saveEvents(value);
    dispatch(createEvent(event));
  },
});
// https://react-redux.js.org/using-react-redux/connect-mapdispatch

export default connect(mapStateToProps, mapDispatchToProps)(Form);
