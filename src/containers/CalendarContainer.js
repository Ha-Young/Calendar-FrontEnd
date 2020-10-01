import React from "react";
import { connect } from "react-redux";
import Calendar from "../components/Calendar"
import { moveToPrevDay, moveToNextDay, openModal, closeModal } from "../actions/index";

function CalendarContainer ({
  date,
  clickPrevDay,
  clickNextDay,
  times,
  isModalOpen,
  clickModalOpen,
  clickModalClose,
}) {

  return (
    <Calendar
      getDate={date}
      handleYesterday={clickPrevDay}
      handleTomorrow={clickNextDay}
      times={times}
      clickToOpenModal={clickModalOpen}
      clickToCloseModal={clickModalClose}
      isModalOpen={isModalOpen}
    />
  );
}

const mapStateToProps = state => {
  return {
    date: state.events.date,
    times: state.events.times,
    isModalOpen: state.modal.isModalOpen,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clickPrevDay: () => dispatch(moveToPrevDay()),
    clickNextDay: () => dispatch(moveToNextDay()),
    clickModalOpen: () => dispatch(openModal()),
    clickModalClose: () => dispatch(closeModal()),
  };
};

// store랑 reducer 연결시킨 컴포넌트(컨테이너)가 반환됨
export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
