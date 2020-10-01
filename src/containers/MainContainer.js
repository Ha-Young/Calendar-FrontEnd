// import React from "react";
// import { connect } from "react-redux";
// import { updateNewEvent } from "../actions/index";

// function MainContainer ({
//   eventTitle,
//   eventDesc,
//   startDay,
//   startTime,
//   endDay,
//   endTime,
// }) {
//   return (
//     <Switch>
//       <Route path="/" exact>
//         <Daily
//           times={times}
//           openEvent={clickToOpenModal}
//           isModalOpen={isModalOpen}
//           eventArea={differenceHour}
//           eventInfo={inputValue}
//         />
//       </Route>
//       <Route path="/weekly">
//         <Weekly
//           times={times}
//           openEvent={clickToOpenModal}
//           isModalOpen={isModalOpen}
//           eventArea={differenceHour}
//           eventInfo={inputValue}
//         />
//       </Route>
//     </Switch>
//   );
// }

// const mapStateToProps = state => {
//   return {
//     eventTitle: state.eventInfo.text,
//     eventDesc: state.eventInfo.text,
//     startDay: state.eventInfo.text,
//     startTime: state.eventInfo.text,
//     endDay: state.eventInfo.text,
//     endTime: state.eventInfo.text,
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     updateNewEvent: () => dispatch(updateNewEvent()),
//   };
// };

// // store랑 reducer 연결시킨 컴포넌트(컨테이너)가 반환됨
// export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
