import { TIME_FROM, TIME_TO } from "../constants/time";

export const getTimeIndex = {
  from: (time) => TIME_FROM.indexOf(time),
  to: (time) => TIME_TO.indexOf(time),
};
