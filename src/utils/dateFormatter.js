import * as dayjs from "dayjs";

export default function dateFormatter(date, format) {
  return dayjs(date).format(format);
}
