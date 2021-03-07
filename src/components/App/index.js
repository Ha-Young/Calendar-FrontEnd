import React, { useEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import styles from "./App.module.css";
import PropTypes from "prop-types";

import Header from "../Header";
import SideBar from "../SideBar";
import NewEventPage from "../../routes/NewEventPage/NewEventPage";
import CalendarPageContainer from "../../containers/CalendarPageContainer";
import EventDetailPageContainer from "../../containers/EventDetailPageContainer";


const App = ({
  dateList,
  currentDate,
  calendarType,
  handleChangeCalendarType,
  loadEventList,
  saveNewEventData,
  isLoading,
  errorMessage,
}) => {
  useEffect(() => {
    loadEventList(dateList);
  }, [calendarType]);

  const location = useLocation();
  const background = location.state?.background;

  return (
    <div className={styles.App}>
      <Header onButtonClick={handleChangeCalendarType} currentDate={currentDate} />
      <SideBar />
      <Switch location={background || location}>
        <Route path="/calendar">
          <CalendarPageContainer />
        </Route>
        <Route path="/events/new">
          <NewEventPage onSubmit={saveNewEventData} loadMoreEventData={loadEventList} />
        </Route>
        <Redirect path="*" to="/calendar" />
      </Switch>
      {
        background &&
          <Route path="/events/:event?">
            <EventDetailPageContainer />
          </Route>
      }
      {isLoading && "isLoading.."}
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};

export default App;

App.propTypes = {
  dateList: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ),
  currentDate: PropTypes.instanceOf(Date),
  handleChangeCalendarType: PropTypes.func.isRequired,
  loadEventList: PropTypes.func.isRequired,
  saveNewEventData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  calendarType: PropTypes.bool.isRequired,
};
