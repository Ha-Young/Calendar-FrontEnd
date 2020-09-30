import React from "react";
import { connect } from "react-redux";
import getDate from "../components/Header/GetDate";
import Header from "../components/Header/Header";
import { moveToPrevDay, moveToNextDay } from "../actions/index";
import {format, addDays, subDays} from 'date-fns';

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
// reducer date???
const mapStateToProps = state => {
  return {
    prevDay: state.date,
    nextDay: state.date,
  }
};

// reducer에 action 알리는 함수(dispatch) 를 prop으로 엮어줌
// moveToPrevDay 는 객체(type) 반환하는 함수.
// redux의 dispatch를 인자로 사용.. 이걸로 store 상태 변경
const mapDispatchToProps = dispatch => {
  return {
    clickPrevDay: () => {
      dispatch(moveToPrevDay())
    },
    clickNextDay: () => dispatch(moveToNextDay()),
  };
};

// store랑 reducer 연결시킨 컴포넌트(컨테이너)가 반환됨
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
