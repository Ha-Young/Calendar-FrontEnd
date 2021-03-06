import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import EventForm from "../EventForm/EventForm";
import DailyCalendar from "../DailyCalendar/DailyCalendar";
import dayjs from "dayjs";

function App({ state, onEventInfo }) {
  const [todayDate, setTodayDate] = useState(dayjs());
  const [date, setDate] = useState(todayDate.format("YYYY-MM-DD"));
  const [id, setId] = useState(null);

  function goNextDay() {
    setTodayDate(todayDate.add(1, "day"));
  }

  function goPrevDay() {
    setTodayDate(todayDate.subtract(1, "day"));
  }

  useEffect(() => {
    setDate(todayDate.format("YYYY-MM-DD"));
  }, [todayDate]);

  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route path="/calendar" exact>
          <DailyCalendar
            eventInfo={state}
            date={date}
            goNextDay={goNextDay}
            goPrevDay={goPrevDay}
            setId={setId}/>
        </Route>
        <Route path="/event/new">
          <EventForm
            eventDetail={state.hasOwnProperty(date) && state[date]}
            onEventInfo={onEventInfo} 
          />
        </Route>
        <Route path="/event/:eventId">
          <EventForm
            eventDetail={state.hasOwnProperty(date) && id !== null && state[date][id]} 
            currentDate={date}
            onEventInfo={onEventInfo}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
