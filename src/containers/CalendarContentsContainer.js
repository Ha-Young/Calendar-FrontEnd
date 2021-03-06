import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import CalendarContents from "../components/CalendarContents/CalendarContents.jsx";
import { loadEvents, selectEvent } from "../actions/index";
import { getEvents } from "../api";
import { calculateDisplayDates } from "../utils";

const CalendarContentsContainer = ({ selectedDate, events, isDailyView, loadEvents, selectEvent }) => {
  const history = useHistory();
  const displayDates = calculateDisplayDates(selectedDate, isDailyView);

  const handleEventClick = (id, dayIndex) => {
    selectEvent(id, dayIndex);
    history.push(`/events/${id}`);
  }

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEvents(displayDates.map(date => date.toFormat("yyyy-LL-dd")));
      loadEvents(events);
    }

    fetchEvents();
  }, [selectedDate, isDailyView]);

  return (
    <CalendarContents
      displayDates={displayDates}
      events={events}
      selectEvent={selectEvent}
      handleEventClick={handleEventClick}
    />
  );
}

const mapStateToProps = (state) => ({
  selectedDate: state.selectedDate,
  events: state.events,
  isDailyView: state.isDailyView,
});

const mapDispatchToProps = {
  loadEvents,
  selectEvent,
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContentsContainer);
