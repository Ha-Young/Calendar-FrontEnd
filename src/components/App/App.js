import React, { useEffect } from "react";
import styles from "./App.module.css";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import NewEventPage from "../../routes/NewEventPage/NewEventPage";
import CalendarPage from "../../routes/CalendarPage/CalendarPage";
import EventDetailPageContainer from "../../containers/EventDetailPageContainer";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

const App = ({
  getEventByCurrentDate,
  dateList,
  isDailyCalendar,
  currentDate,
  handleChangeCalendarType,
  handleChangeCalendarPage,
  onLoad,
  saveNewEventData,
  selectedDate,
}) => {
  useEffect(() => {
    onLoad(selectedDate); // initialLize..
  }, [selectedDate]);

  const location = useLocation();
  const background = location.state?.background;
  
  return (
    <div className={styles.App}>
      <Header
        onClickButton={handleChangeCalendarType}
        onToggle={handleChangeCalendarPage}
        type={isDailyCalendar}
        currentDate={currentDate}
        selectedDate={selectedDate}
      />
      <SideBar />
      <Switch location={background || location}>
        <Route path="/calendar" exact>
          <CalendarPage
            onLoad={onLoad}
            getEventByCurrentDate={getEventByCurrentDate}
            dateList={dateList}
          />
        </Route>
        <Route path="/events/new">
          <NewEventPage onSubmit={saveNewEventData} />
        </Route>
      </Switch>
      {
        background && 
          <Route path="/events/:event">
            <EventDetailPageContainer />     
          </Route>
      }
      <Redirect path="*" to="/calendar" />
    </div>
  );
};

export default App;
