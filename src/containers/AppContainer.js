import { connect } from "react-redux";
import App from "../components/App";
import { loadEventData, saveEventData } from "../api";
import {
  changeCalendarType,
  getEventDataSuccess,
  getEventDataFail,
  getEventData,
  setEventDataSuccess,
  setEventDataFail,
  setEventData,
} from "../actions/index";

const mapDispatchToProps = (dispatch) => ({
  handleChangeCalendarType(info) {
    dispatch(changeCalendarType(info));
  },
  async loadEventList(dateShown) {
    try {
      dispatch((getEventData()));
      const data = await loadEventData(dateShown);

      dispatch(getEventDataSuccess({
        events: data,
      }));
    } catch(error) {
      dispatch(getEventDataFail(error.message));
    }
  },
  async saveNewEventData(data) {
    try {
      dispatch((setEventData()));
      const savedResult = await saveEventData(data);

      dispatch((setEventDataSuccess({
        events: savedResult,
      })));
    } catch(error) {
      dispatch((setEventDataFail(error.message)));
    }
  },
});

const mapStateToProps = ({ calendarDate, eventData }) => ({
  currentDate: calendarDate.date,
  isLoading: eventData.isLoading,
  errorMessage: eventData.errorMessage,
  dateList: calendarDate.isDaily
    ? calendarDate.daily
    : calendarDate.weekly,
  calendarType: calendarDate.isDaily,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
