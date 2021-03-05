import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import Header from "components/Header/Header";
import CalenderHeader from "components/CalenderHeader/CalenderHeader";
import DailySchedule from "components/DailyCalender/DailyCalender";
import WeeklySchedule from "components/WeeklyCalender/WeeklyCalender";
import EventDetail from "components/EventDetail/EventDetail";
import Login from "components/Login/Login";
import Profile from "components/Profile/Profile";
import EventForm from "components/EventForm/EventForm";

import { actionCreators } from "actions/actionCreators";
import { fetchDailyEvent } from "api/firebaseAPIs";
import { fetchWeeklyEvent } from "api/firebaseAPIs";

import routes from "constants/routes";
import { typeConst, dateConst, directionConst } from "constants/constants";
import {
  getDateISO,
  parseDate,
  getMonthAndWeek,
  getDaysOfWeek,
  generateKey,
} from "utils/utilFunction";

const AppRouter = ({
  showDaily,
  showWeekly,
  dailyEvent,
  weeklyEvent,
  addEvent,
  editEvent,
  deleteEvent,
  userData,
  isLoggedIn,
}) => {
  const [weekCount, setWeekCount] = useState(0);
  const [monthAndWeek, setMonthAndWeek] = useState(
    getMonthAndWeek(getDateISO(weekCount))
  );
  const [daysOfWeek, setDaysOfWeek] = useState(getDaysOfWeek(0));
  const [dateCount, setDateCount] = useState(0);
  const [date, setDate] = useState(parseDate(getDateISO(0)));
  const history = useHistory();

  useEffect(() => {
    fetchDailyEvent((events) => {
      showDaily(events);
    }, getDateISO(dateCount));
  }, [showDaily, dateCount]);

  useEffect(() => {
    fetchWeeklyEvent((events) => {
      showWeekly(events);
    }, getDateISO(weekCount));
  }, [showWeekly, weekCount]);

  const setNewWeek = (direction) => {
    let currentWeekCount = weekCount;

    if (direction === directionConst.PREV) {
      currentWeekCount = currentWeekCount - dateConst.DAY_OF_WEEK;
    }

    if (direction === directionConst.NEXT) {
      currentWeekCount = currentWeekCount + dateConst.DAY_OF_WEEK;
    }

    setWeekCount(currentWeekCount);
    setMonthAndWeek(getMonthAndWeek(getDateISO(currentWeekCount)));
    setDaysOfWeek(getDaysOfWeek(currentWeekCount));
  };

  const setNewDate = (direction) => {
    let currentDateCount = dateCount;

    if (direction === directionConst.PREV) {
      currentDateCount--;
    }

    if (direction === directionConst.NEXT) {
      currentDateCount++;
    }

    setDateCount(currentDateCount);
    setDate(parseDate(getDateISO(currentDateCount)));
  };

  const handleSubmit = (newEvent, type) => {
    if (type === typeConst.ADD) {
      const id = generateKey();
      addEvent(newEvent, id);
    } else if (type === typeConst.EDIT) {
      const id = newEvent.id;
      editEvent(newEvent, id);
      history.push(`/events/${id}`);
    }

    alert("submit complete");
  };

  return (
    <>
      {isLoggedIn ? (
        <section>
          <Header />
          <Switch>
            <Route exact path={routes.HOME}>
              <CalenderHeader
                onClick={setNewWeek}
                currentPeriod={
                  monthAndWeek.month + "월 " + monthAndWeek.week + "주차"
                }
              />
              <WeeklySchedule
                daysOfWeek={daysOfWeek}
                weeklyEvent={weeklyEvent}
              />
            </Route>

            <Route path={routes.DAILY}>
              <CalenderHeader
                onClick={setNewDate}
                currentPeriod={
                  date.month +
                  "월 " +
                  date.date +
                  "일 " +
                  date.day.toUpperCase().slice(0, 3)
                }
              />
              <DailySchedule dailyEvent={dailyEvent} />
            </Route>

            <Route path={routes.WEEKLY}>
              <CalenderHeader
                onClick={setNewWeek}
                currentPeriod={
                  monthAndWeek.month + "월 " + monthAndWeek.week + "주차"
                }
              />
              <WeeklySchedule
                daysOfWeek={daysOfWeek}
                weeklyEvent={weeklyEvent}
              />
            </Route>

            <Route path={routes.ADD_EVENT}>
              <EventForm
                type={typeConst.ADD}
                weeklyEvent={weeklyEvent}
                onSubmit={handleSubmit}
              />
            </Route>

            <Route exact path={routes.EDIT_EVENT}>
              <EventForm
                type={typeConst.EDIT}
                weeklyEvent={weeklyEvent}
                onSubmit={handleSubmit}
              />
            </Route>

            <Route exact path={routes.EVENT_DETAIL}>
              <EventDetail
                weeklyEvent={weeklyEvent}
                deleteEvent={(id, date) => deleteEvent(id, date)}
              />
            </Route>

            <Route exact path={routes.PROFILE}>
              <Profile userData={userData} />
            </Route>

            <Redirect from="/calender" to={routes.HOME} />
          </Switch>
        </section>
      ) : (
        <Switch>
          <Route path={routes.HOME}>
            <Login />
          </Route>
          <Redirect from="*" to={routes.HOME} />
        </Switch>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    showDaily: (events) => dispatch(actionCreators.showDaily(events)),
    showWeekly: (events) => dispatch(actionCreators.showWeekly(events)),
    deleteEvent: (id, date) => dispatch(actionCreators.deleteEvent(id, date)),
    addEvent: (newEvent, id) => dispatch(actionCreators.addEvent(newEvent, id)),
    editEvent: (editedEvent, id) =>
      dispatch(actionCreators.editEvent(editedEvent, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
