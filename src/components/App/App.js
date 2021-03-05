import React, { useEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import styles from "./App.module.css";

import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import NewEventPage from "../../routes/NewEventPage/NewEventPage";
import CalendarPageContainer from "../../containers/CalendarPageContainer";
import EventDetailPageContainer from "../../containers/EventDetailPageContainer";

const App = ({
  dateList,
  currentDate,
  handleChangeCalendarType,
  onLoad,
  saveNewEventData,
  isLoading,
  errorMessage,
  calendarType,
}) => {
  useEffect(() => {
    onLoad(dateList);
  }, [calendarType]);

  const location = useLocation();
  const background = location.state?.background;
 
  return (
    <div className={styles.App}>
      <Header onClickButton={handleChangeCalendarType} currentDate={currentDate} />
      <SideBar />
      <Switch location={background || location}>
        <Route path="/calendar">
          <CalendarPageContainer />
        </Route>
        <Route path="/events/new">
          <NewEventPage onSubmit={saveNewEventData} />
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
      {errorMessage && errorMessage}
    </div>
  );
};

export default App;
