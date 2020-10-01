import React, { useEffect } from "react";
import { connect } from "react-redux";
import { userLogIn, userLogOut, clickPrevButton, clickNextButton, changeWeeklyView, getEventsData, updateEvent, deleteEvent} from "../actions/actionCreators";
import App from "../components/App/App";
import { getData, updateData, deleteData } from "../utils/api";

function AppContainer ({ userLogIn, userLogOut, isLoggedIn, date, isDailyView, clickPrevButton, clickNextButton, changeWeeklyView, getEventsData, eventDetail, updateEvent, deleteEvent }) {
  useEffect(() => {
    (async function getStoredData () {
      const storedData = await getData();
      getEventsData(storedData);
    })();
  }, []);

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
      eventDetail={eventDetail}
      updateEvent={updateEvent}
      deleteEvent={deleteEvent}
    />
  );
}

const mapStateToProps = (state) => {
  const { manageEvent: {date, isLoggedIn, isDailyView}, eventDetail } = state;

  return {
    isLoggedIn: isLoggedIn,
    date: date,
    isDailyView: isDailyView,
    eventDetail: eventDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogIn: () => dispatch(userLogIn()),
    userLogOut: () => dispatch(userLogOut()),
    clickPrevButton: (days) => dispatch(clickPrevButton(days)),
    clickNextButton: (days) => dispatch(clickNextButton(days)),
    changeWeeklyView: () => dispatch(changeWeeklyView()),
    getEventsData: (data) => dispatch(getEventsData(data)),
    updateEvent: async (eventDetails) => {
      try {
        await updateData(eventDetails);
        dispatch(updateEvent(eventDetails));
      } catch (error) {
        console.log(error);
      }
    },
    deleteEvent: async (eventDetails) => {
      try {
        await deleteData(eventDetails);
        dispatch(deleteEvent(eventDetails));
      } catch (error) {
        console.log(error);
      }
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps) (AppContainer);
