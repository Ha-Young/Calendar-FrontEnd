import moment from "moment";
import { DATE_SHOWN, WEEK_SHOWN } from "../constants/actionTypes";
import { MOVE_WEEK, MOVE_DATE } from "../constants/actionTypes";
import { ADD_EVENT, EDIT_EVENT, DELETE_EVENT } from "../constants/actionTypes";

export const showDate = () => {

  return (
    {
      type: DATE_SHOWN,
      presentDate: "",
      nextDate: ""
    }
  )
}

export const addEvent = (event) => {
  console.log("ACTION 함수 내 EVENTINFO", event);

  if (!event) {
    return (
      {
        type: ADD_EVENT,
        eventId: ""
      }
    )
  }

  const startTimes = Object.keys(event);
  const eventInfo = event[startTimes];

  return (
    {
      type: ADD_EVENT,
      eventId: eventInfo.eventId,
      eventDate: eventInfo.eventId,
      title: eventInfo.title,
      description: eventInfo.description,
      startTime: eventInfo.startTime,
      endTime: eventInfo.endTime
    }
  )
}

export const deleteEvent = () => {

  return (
    {
      type: DELETE_EVENT,
      eventId: ""
    }
  )
}

export const editEvent = () => {

  return (
    {
      type: EDIT_EVENT,
      eventId: ""
    }
  )
}

export const moveDate = (eventInfo) => {
  console.log("moveDate ACTION 함수!!! ", eventInfo);


  if (eventInfo.buttonTypes === "prevButton") {
    const newShownDate = moment(eventInfo.currentDate).subtract('1', 'days').format('YYYY-MM-DD');

    return (
      {
        type: MOVE_DATE,
        date: newShownDate
      }
    )
  }

  if (eventInfo.buttonTypes === "nextButton") {
    const newShownDate = moment(eventInfo.currentDate).add('1', 'days').format('YYYY-MM-DD');

    return (
      {
        type: MOVE_DATE,
        date: newShownDate
      }
    )
  }

}

export const moveWeek = () => {

  return (
    {
      type: MOVE_WEEK,
      week: ""
    }
  )
}