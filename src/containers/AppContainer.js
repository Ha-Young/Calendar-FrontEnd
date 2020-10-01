import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../utils/api";
import {
  userLogIn,
  userLogOut,
  clickPrevDateButton,
  clickNextDateButton,
  changeWeeklyView,
  getStoredEventsData
} from "../actions/actionCreators";
import App from "../components/App/App";

function AppContainer (props) {
  const {
    userLogIn,
    userLogOut,
    isLoggedIn,
    date,
    isDailyView,
    clickPrevDateButton,
    clickNextDateButton,
    changeWeeklyView,
    getStoredEventsData,
    eventList
  } = props;

  const getStoredData = async () => {
    const storedEventsData = await getData();
    getStoredEventsData(storedEventsData);
  };

  useEffect(() => {
    getStoredData();
  }, []);

  return (
    <App
      userLogIn={userLogIn}
      userLogOut={userLogOut}
      isLoggedIn={isLoggedIn}
      date={date}
      isDailyView={isDailyView}
      clickPrevDateButton={clickPrevDateButton}
      clickNextDateButton={clickNextDateButton}
      changeWeeklyView={changeWeeklyView}
      eventList={eventList}
    />
  );
}

const mapStateToProps = (state) => {
  const { eventControl: { date, isLoggedIn, isDailyView }, eventList } = state;

  return {
    date: date,
    isLoggedIn: isLoggedIn,
    isDailyView: isDailyView,
    eventList: eventList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogIn: () => dispatch(userLogIn()),
    userLogOut: () => dispatch(userLogOut()),
    clickPrevDateButton: (days) => dispatch(clickPrevDateButton(days)),
    clickNextDateButton: (days) => dispatch(clickNextDateButton(days)),
    changeWeeklyView: () => dispatch(changeWeeklyView()),
    getStoredEventsData: (data) => dispatch(getStoredEventsData(data)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps) (AppContainer);
