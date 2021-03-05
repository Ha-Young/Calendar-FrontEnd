import moment from "moment";

export default function weekOfMonth (m) {
 return m.week() - moment(m).startOf("month").week() + 1;
}
