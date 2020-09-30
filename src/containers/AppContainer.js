import React from "react";
import { connect } from "react-redux";
import { userLogIn, userLogOut, clickPrevButton, clickNextButton, changeWeeklyView } from "../actions/actionCreators";
import App from "../components/App/App";

function AppContainer ({ userLogIn, userLogOut, isLoggedIn, date, isDailyView, clickPrevButton, clickNextButton, changeWeeklyView }) {
  return (
    <App
      userLogIn={userLogIn}
      userLogOut={userLogOut}
      isLoggedIn={isLoggedIn}
      date={date}
      isDailyView={isDailyView}
      clickPrevButton={clickPrevButton}
      clickNextButton={clickNextButton}
      changeWeeklyView={changeWeeklyView}
    />
  );
}

const mapStateToProps = (state) => {
  const { manageEvent: {date, isLoggedIn, isDailyView}} = state;

  return {
    isLoggedIn: isLoggedIn,
    date: date,
    isDailyView: isDailyView,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogIn: () => dispatch(userLogIn()),
    userLogOut: () => dispatch(userLogOut()),
    clickPrevButton: (date) => dispatch(clickPrevButton(date)),
    clickNextButton: (date) => dispatch(clickNextButton(date)),
    changeWeeklyView: () => dispatch(changeWeeklyView()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (AppContainer);
