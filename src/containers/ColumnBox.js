import { connect } from "react-redux";
import TimeTableColumnBox from "../components/Calendar/TimeTable/ColumnBox";
import { getDate, getMonth, getYear } from "date-fns";

// isWeek, allEvents, week, day

const getEventsFromWeek = (week, events) => {
  const result = [];
  
  for (const dayInWeek of week) {
    const year = getYear(dayInWeek);
    const monthNumber = Number(getMonth(dayInWeek)) + 1;
    const month = monthNumber < 10 ? `0${monthNumber}` : monthNumber.toString(); 
    const dayNumber = getDate(dayInWeek);
    const day = dayNumber < 10 ? `0${dayNumber}` : dayNumber.toString();

    const eventIds = events.dateIndex?.[year]?.[month]?.[day];

    if (!eventIds) {
      result.push([]);
      continue;
    }

    const dayInWeekEvents = [];
    for (const eventId of eventIds) {
      dayInWeekEvents.push(events.eventList[eventId]);
    }
    result.push(dayInWeekEvents);
  }

  return result;
}

const getEventFromOneDay = (oneDay, events) => {
  const result = [];
  
  const year = getYear(oneDay);
  const monthNumber = Number(getMonth(oneDay)) + 1;
  const month = monthNumber < 10 ? `0${monthNumber}` : monthNumber.toString(); 
  const dayNumber = getDate(oneDay);
  const day = dayNumber < 10 ? `0${dayNumber}` : dayNumber.toString();

  const eventIds = events.dateIndex?.[year]?.[month]?.[day];

  if (!eventIds) {
    return null;
  }

  for (const eventId of eventIds) {
    result.push(events.eventList[eventId]);
  }

  return result;
}

const mapStateToProps = (state) => ({
  isWeek: state.date.isWeekMode,
  day: state.date.currentDay,
  week: state.date.currentWeek,
  weekEvents: state.date.isWeekMode ? getEventsFromWeek(state.date.currentWeek, state.events) : null,
  dayEvent: state.date.isWeekMode ? null : getEventFromOneDay(state.date.currentDay, state.events),
  events: state.events,
});

export default connect(mapStateToProps)(TimeTableColumnBox);