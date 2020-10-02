import moment from "moment";
import { ADD_EVENT, MOVE_DATE, DATE_SHOWN } from "../constants/actionTypes";

export const showDate = () => {
  return (
    {
      type: DATE_SHOWN,
      presentDate: "",
      nextDate: ""
    }
  );
};

export const addEvent = (event) => {
  if (!event) {
    return (
      {
        type: ADD_EVENT,
        eventId: ""
      }
    );
  }

  return (
    {
      type: ADD_EVENT,
      eventId: event.eventId,
      eventDate: event.eventId,
      title: event.title,
      description: event.description,
      startTime: event.startTime,
      endTime: event.endTime
    }
  );
};

export const moveDate = (eventInfo) => {
  if (eventInfo.buttonTypes === "prevButton") {
    const newShownDate = moment(eventInfo.currentDate).subtract('1', 'days').format('YYYY-MM-DD');

    return (
      {
        type: MOVE_DATE,
        date: newShownDate
      }
    );
  }

  if (eventInfo.buttonTypes === "nextButton") {
    const newShownDate = moment(eventInfo.currentDate).add('1', 'days').format('YYYY-MM-DD');

    return (
      {
        type: MOVE_DATE,
        date: newShownDate
      }
    );
  }
};
