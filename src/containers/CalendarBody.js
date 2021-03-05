import { connect } from "react-redux";
import CalendarBody from "../components/CalendarBody/CalendarBody.jsx";
import { loadEvents, selectEvent } from "../actions/index";

const mapStateToProps = (state) => ({
  selectedDate: state.selectedDate,
  events: state.events,
  isDailyView: state.isDailyView,
});

const mapDispatchToProps = {
  loadEvents,
  selectEvent,
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarBody);
