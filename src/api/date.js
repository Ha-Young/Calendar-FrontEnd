import { format } from "date-fns";

export const getToday = function () {
  return format(new Date(), "yyyy-MM-dd");
}
