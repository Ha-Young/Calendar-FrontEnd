import { message } from "antd";

import { DATE_FORMAT, DATE_FORMAT_WITH_HOUR } from "../../constants/common";
import { checkIsSameDate, checkIsSameDay, getDiffHour } from "../../utils/date";

export const FORM_DEFAULT_TITLE = "일정";
export const FORM_TYPE_CREATE = "추가";
export const FORM_TYPE_UPDATE = "수정";
export const FORM_TYPE_DELETE = "삭제";
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

export function makeNewEvent(event, originId) {
  let newEvent = null;

  if (originId) {
    event.id = originId;
  }

  const date = event.startDate.format(DATE_FORMAT);
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

  return {
    newEvent: {
      ...event,
      date,
      startDate,
      endDate,
      timeLength: diffHours,
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
