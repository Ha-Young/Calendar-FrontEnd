import { connect } from "react-redux";

import Weekly from "../components/Weekly/Weekly";
import { getWeeklyEvents } from "../reducers/events";

// const mockEvents = [
//   {
//     1: {
//       content: "내용1",
//       end: 3,
//       start: 1,
//       title: "제목1",
//     },
//   },
//   {
//     3: {
//       content: "내용1",
//       end: 4,
//       start: 3,
//       title: "제목1",
//     },
//   },
//   {
//     6: {
//       content: "내용1",
//       end: 10,
//       start: 6,
//       title: "제목1",
//     },
//   },
//   {
//     0: {
//       content: "내용1",
//       end: 2,
//       start: 0,
//       title: "제목1",
//     },
//   },
//   {
//     4: {
//       content: "내용1",
//       end: 7,
//       start: 4,
//       title: "제목1",
//     },
//   },
//   {
//     1: {
//       content: "내용1",
//       end: 3,
//       start: 1,
//       title: "제목1",
//     },
//   },
//   {
//     1: {
//       content: "내용1",
//       end: 3,
//       start: 1,
//       title: "제목1",
//     },
//   },
// ];

const mapStateToProps = (state) => {
  const weeklyEvents = getWeeklyEvents(state.date, state.events);

  return {
    date: state.date,
    weeklyEvents,
  };
};

export default connect(mapStateToProps, null)(Weekly);
