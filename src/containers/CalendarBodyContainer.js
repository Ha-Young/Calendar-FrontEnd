import React, { useEffect } from "react";
import { connect } from "react-redux";
import CalendarBody from "../components/CalendarBody/CalendarBody.jsx";
import { loadEvents, selectEvent } from "../actions/index";
import { getEvents } from "../api";
import { calculateDisplayDates } from "../utils";

const CalendarBodyContainer = ({ selectedDate, events, isDailyView, loadEvents, selectEvent }) => {
  const displayDates = calculateDisplayDates(selectedDate, isDailyView);

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEvents(displayDates.map(date => date.toFormat("yyyy-LL-dd")));
      loadEvents(events);
    }

    fetchEvents();
  }, [selectedDate, isDailyView]);

  return (
    <CalendarBody displayDates={displayDates} events={events} selectEvent={selectEvent}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CalendarBodyContainer);
