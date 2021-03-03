import { connect } from "react-redux";
import { getEventsData, saveEventData } from "../api";
import {
  changeCalendarType,
  changeCalendarPage,
  fetchCalendarDataSuccess,
  fetchCalendarDataFail
} from "../actions/index";
import App from "../components/App/App";
import { getEventsByCurrentDates } from "../reducers/eventData";

const mapDispatchToProps = (dispatch) => ({
  handleChangeCalendarType(info) {
    dispatch(changeCalendarType(info));
  },
  handleChangeCalendarPage(info) {
    dispatch(changeCalendarPage(info));
  },
  async loadEventData() {
    try {
      const data = await getEventsData();

      dispatch(fetchCalendarDataSuccess({
        isLoading: false,
        errorMessage: "",
        events: data,
      }));
    } catch(error) {
      dispatch(fetchCalendarDataFail({  // 인덴팅
        isLoading: false,
        errorMessage: error.message,
      }));
    }
  },
  async saveNewEventData(data) {
    try {
      saveEventData(data);
    } catch(error) {

    }
  },
});

const mapStateToProps = ({ calendarDate, eventData }) => ({
  eventList: calendarDate.isDaily
    ? getEventsByCurrentDates(eventData, calendarDate.daily)
    : getEventsByCurrentDates(eventData, calendarDate.weekly),
  dateList: calendarDate.isDaily
    ? calendarDate.daily
    : calendarDate.weekly,
  isDailyCalendar: calendarDate.isDaily,
  currentDate: calendarDate.date,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
