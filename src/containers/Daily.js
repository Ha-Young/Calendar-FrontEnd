import { connect } from "react-redux";

import Daily from "../components/Daily/Daily";
import { getKeyFormat } from "../utils/date";

// const mockEvents = {
//   1: {
//     content: "내용1",
//     end: 3,
//     start: 1,
//     title: "제목1",
//   },
//   5: {
//     content: "내용2",
//     end: 8,
//     start: 5,
//     title: "제목2",
//   },
// };

const mapStateToProps = (state) => {
  const rawEvents = state.events[getKeyFormat(state.date)];
  const eventList = rawEvents?.allIds;
  const events = {};

  if (eventList) {
    for (const key of eventList) {
      events[key] = rawEvents.byId[key];
    }
  }

  return {
    date: state.date,
    events,
  }
};

export default connect(mapStateToProps, null)(Daily);
