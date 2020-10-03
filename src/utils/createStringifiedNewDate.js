import { SHOW_PREVIOUS_DAY, SHOW_PREVIOUS_WEEK } from "../constants";

export default function createStringifiedNewDate(date, caseType) {
  if (caseType === SHOW_PREVIOUS_DAY || caseType === SHOW_PREVIOUS_WEEK) {
    return [date[0], date[1], `${Number(date[2]) - 1}`].join("-");
  }

  return [date[0], date[1], `${Number(date[2]) + 1}`].join("-");
}
