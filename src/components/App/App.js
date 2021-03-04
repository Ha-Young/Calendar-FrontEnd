import React from "react";
import styles from "./App.module.css";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import NewEventPage from "../../routes/NewEventPage/NewEventPage";
import CalendarPage from "../../routes/CalendarPage/CalendarPage";
import EventDetailPageContainer from "../../containers/EventDetailPageContainer";
import { Route, Switch, Redirect } from "react-router-dom";

const App = ({
  getEventByCurrentDate,
  dateList,
  isDailyCalendar,
  currentDate,
  handleChangeCalendarType,
  handleChangeCalendarPage,
  loadEventData,
  saveNewEventData,
  selectedDate,
}) => {
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
      <Switch>
        <Route path="/" exact>
          <CalendarPage
            onLoad={loadEventData}
            getEventByCurrentDate={getEventByCurrentDate}
            dateList={dateList}
          />
        </Route>
        <Route path="/events/new">
          <NewEventPage onSubmit={saveNewEventData} />
        </Route>
        <Route path="/events/:event">
          <EventDetailPageContainer />
        </Route>
        <Redirect path="*" to="/" />
      </Switch>
    </div>
  );
};

export default App;
