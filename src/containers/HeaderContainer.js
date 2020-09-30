import React from "react";
import { connect } from "react-redux";
import getDate from "../components/Header/GetDate";
import Header from "../components/Header/Header";
import { moveToPrevDay, moveToNextDay } from "../actions/index";

function HeaderContainer ({
  prevDay,
  nextDay,
  clickPrevDay,
  clickNextDay,
}) {
  return (
    <Header
      yesterday={prevDay}
      tomorrow={nextDay}
      handleYesterday={clickPrevDay}
      handleTomorrow={clickNextDay}
    />
  );
}

// store의 state를 prop으로 엮어줌
const mapStateToProps = state => {
  return {
    prevDay: state.date, // 무엇?
    nextDay: state.date,
  }
};

// reducer에 action 알리는 함수(dispatch) 를 prop으로 엮어줌
const mapDispatchToProps = dispatch => {
  return {
    clickPrevDay: () => dispatch(moveToPrevDay()),
    clickNextDay: () => dispatch(moveToNextDay()),
  };
};

// store랑 reducer 연결시킨 컴포넌트(컨테이너)가 반환됨
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
