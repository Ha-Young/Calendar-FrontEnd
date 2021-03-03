import { message } from "antd";

import { DATE_FORMAT_WITH_HOUR } from "../../constants/common";
import { checkIsSameDate, checkIsSameDay, getDiffHour } from "../../utils/date";

export const ERROR_TYPE_OVER_START_DAY = "OverStartDayError";
export const ERROR_TYPE_EVENT_DAY_OVER = "EventDayOverError";

export const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};

export function makeNewEvent(event) {
  let newEvent = null;

  const startDate = event.startDate.format(DATE_FORMAT_WITH_HOUR);
  const endDate = event.endDate.format(DATE_FORMAT_WITH_HOUR);

  const diffHours = getDiffHour(event.startDate, event.endDate);

  if (checkIsSameDate(startDate, endDate, DATE_FORMAT_WITH_HOUR) || diffHours < 0) {
    return {
      newEvent,
      errorType: ERROR_TYPE_OVER_START_DAY,
    };
  }

  if (!checkIsSameDay(startDate, endDate, DATE_FORMAT_WITH_HOUR)) {
    return {
      newEvent,
      errorType: ERROR_TYPE_EVENT_DAY_OVER,
    };
  }

  const id = `${startDate}:${diffHours}`;

  return {
    newEvent: {
      ...event,
      id,
      startDate,
      endDate,
    },
  };
}

export function viewErrMsg(msg) {
  message.error({
    content: msg,
    style: {
      marginTop: '80vh',
      marginLeft: '17vw',
    },
  });
}
