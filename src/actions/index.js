import {
  CHANGE_CALENDAR_MODE,
  MOVE_TO_PREV_DATE,
  MOVE_TO_NEXT_DATE,
} from "./actionTypes";

export function changeCalendarMode(calendarMode) {
  console.log(calendarMode, "c")
  return {
    type: CHANGE_CALENDAR_MODE,
    calendarMode,
  }
}
