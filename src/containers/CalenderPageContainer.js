import { connect } from "react-redux";
import CalenderPage from "../routes/CalendarPage";
import { loadSampleData } from "../api";
import { changeCalendarPage, successFetchingCalendarData } from "../actions/index";

const mapStateToProps = ({ calendarDate }) => ({
  calendarList: calendarDate.isDaily ? calendarDate.daily : calendarDate.weekly,
  isDailyCalnedar: calendarDate.isDaily,
  calendarInfo: [calendarDate.date, calendarDate.gap]
});

const mapDispatchToProps = (dispatch) => ({
  onClickButton(info) {
    dispatch(changeCalendarPage(info));
  },
  async onLoad() {
    const data = await loadSampleData();
    dispatch(successFetchingCalendarData(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CalenderPage);
