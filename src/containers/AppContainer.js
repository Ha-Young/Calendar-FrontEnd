import { connect } from "react-redux";
import { loadEventData, saveEventData } from "../api";
import {
  changeCalendarType,
  changeCalendarPage,
  getEventDataSuccess,
  getEventDataFail,
  getEventData,
  setEventData,
  setEventDataSuccess,
  setEventDataFail,
} from "../actions/index";
import App from "../components/App/App";
import { getEventByCurrentDate } from "../reducers/eventData";

const mapDispatchToProps = (dispatch) => ({
  handleChangeCalendarType(info) {
    dispatch(changeCalendarType(info));
  },
  handleChangeCalendarPage(info) {
    dispatch(changeCalendarPage(info));
  },
  async onLoad(dateShown) {
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
  getEventByCurrentDate: (date) => getEventByCurrentDate(eventData, date),
  dateList: calendarDate.isDaily
    ? calendarDate.daily
    : calendarDate.weekly,
  isDailyCalendar: calendarDate.isDaily,
  currentDate: calendarDate.date,
  selectedDate: calendarDate.selectedDate,
  isLoading: eventData.isLoading,
  errorMessage: eventData.errorMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
