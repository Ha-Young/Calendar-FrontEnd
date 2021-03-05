import { getDateISOstring } from "../../utils";
import { EVENT_INIT_ID } from "../../constants";

const registerEvent = (dateInfo, eventInfo, setEvent) => {

  const { eventId, year, month, date, fromHour, toHour } = dateInfo;
  const { title, content } = eventInfo;
  const eventFrom = getDateISOstring(year, month, date, fromHour);
  const eventTo = getDateISOstring(year, month, date, toHour);
  const timeStatmp = Date.now();
  const id = eventId === EVENT_INIT_ID ? "event" + timeStatmp : eventId;

  setEvent({
    id,
    title,
    period: {
      from: eventFrom,
      to: eventTo,
    },
    content: content,
    timeStamp: timeStatmp,
  });
};

export default registerEvent;
