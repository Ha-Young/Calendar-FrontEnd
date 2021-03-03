import React from "react";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import NewEventPage from "../../routes/NewEventPage/NewEventPage";
import CalendarPage from "../../routes/CalendarPage/CalendarPage";
import { Route, Switch, Redirect } from "react-router-dom";

const App = ({
  calendarList,
  isDailyCalendar,
  currentDate,
  handleChangeCalendarType,
  handleChangeCalendarPage,
  loadEventData,
  saveNewEventData,
}) => {
  return (
    <div className={styles.App}>
      <Header 
        onClickButton={handleChangeCalendarType} 
        onToggle={handleChangeCalendarPage}
        type={isDailyCalendar}
        currentDate={currentDate}
      />
      <SideBar />
      <Switch>
        <Route path="/" exact>
          <CalendarPage 
            onLoad={loadEventData}
            calendarList={calendarList}
          />
        </Route>
        <Route path="/events/new">
          <NewEventPage onSubmit={saveNewEventData} />
        </Route>
        <Route path="/events/:eventId">
          <div>Event/eventId</div>
        </Route>
        <Redirect path="*" to="/" />
      </Switch>
    </div>
  );
};

export default App;
