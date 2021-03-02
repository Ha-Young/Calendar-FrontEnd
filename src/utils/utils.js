import format from "date-fns/format";
import add from "date-fns/add";
import sub from "date-fns/sub";

export function addDay(dateObj) {
  return add(dateObj, {
    days: 1,
  });
}

export function subDay(dateObj) {
  return sub(dateObj, {
    days: 1,
  });
}

export function formatDate(dateObj) {
  return format(dateObj, "MM/dd/yyyy");
}
