import { connect } from "react-redux";
import CalendarPage from "../routes/CalendarPage/CalendarPage";
import { changeCalendarPage } from "../actions"
import { getEventByCurrentDate } from "../reducers/eventData";

const mapDispatchToProps = (dispatch) => ({
  handleCalendarType(info) {
    dispatch(changeCalendarPage(info));
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
