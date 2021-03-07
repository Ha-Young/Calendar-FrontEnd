import React from "react";
import { useLocation } from "react-router-dom";
import Error from "../Error/Error";
import EventFormContainer from "../../containers/EventFormContainer";
import { DEFAULT_ERROR_MESSAGE } from "../../constants/string";

export default function Event({ selectedEventInfo }) {
  const currentUrl = useLocation();
  const isWrongUrl = (selectedEventInfo && currentUrl.pathname !== `/events/${selectedEventInfo.selectedEventId}`) && currentUrl.pathname !== "/events/new";

  return (
    isWrongUrl
      ? <Error />
      : <EventFormContainer text={DEFAULT_ERROR_MESSAGE} />
  );
}
