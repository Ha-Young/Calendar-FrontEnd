import React from "react";
import { useLocation } from "react-router-dom";
import Error from "../Error/Error";
import EventForm from "../EventForm/EventForm";

export default function Event({ events, selectedEventInfo }) {
  const currentUrl = useLocation();
  const isWrongUrl = (selectedEventInfo && currentUrl.pathname !== `/events/${selectedEventInfo.selectedEventId}`) && currentUrl.pathname !== "/events/new";

  return (
    isWrongUrl
    ? <Error />
    : <EventForm events={events} selectedEventInfo={selectedEventInfo} />
  );
}
