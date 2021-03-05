import { TIME_FROM, TIME_TO } from "../constants/time";

export const getTimeIndex = {
  fromIndex: (time) => TIME_FROM.indexOf(time),
  toIndex: (time) => TIME_TO.indexOf(time),
};
