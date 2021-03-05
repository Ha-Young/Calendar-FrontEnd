import { connect } from "react-redux";
import CalendarPage from "../routes/CalendarPage/CalendarPage";
import { changeCalendarPage, getEventDataSuccess, getEventDataFail, getEventData } from "../actions"
import { loadEventData } from "../api";
import { getEventByCurrentDate } from "../reducers/eventData";

const mapDispatchToProps = (dispatch) => ({
  handleCalendarType(info) {
    dispatch(changeCalendarPage(info));
  },
  async onLoadMore(dateShown) {
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
});

const mapStateToProps = ({ calendarDate, eventData }) => ({
  isDailyCalendar: calendarDate.isDaily,
  selectedDate: calendarDate.selectedDate,
  dateList: calendarDate.isDaily
    ? calendarDate.daily
    : calendarDate.weekly,
  getEventByCurrentDate: (date) => getEventByCurrentDate(eventData, date),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage);
