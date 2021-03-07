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
import { FORM_TYPE, DATE, DIRECTION } from "constants/constants";
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

    if (direction === DIRECTION.PREV) {
      currentWeekCount = currentWeekCount - DATE.DAY_OF_WEEK;
    }

    if (direction === DIRECTION.NEXT) {
      currentWeekCount = currentWeekCount + DATE.DAY_OF_WEEK;
    }

    setWeekCount(currentWeekCount);
    setMonthAndWeek(getMonthAndWeek(getDateISO(currentWeekCount)));
    setDaysOfWeek(getDaysOfWeek(currentWeekCount));
  };

  const setNewDate = (direction) => {
    let currentDateCount = dateCount;

    if (direction === DIRECTION.PREV) {
      currentDateCount--;
    }

    if (direction === DIRECTION.NEXT) {
      currentDateCount++;
    }

    setDateCount(currentDateCount);
    setDate(parseDate(getDateISO(currentDateCount)));
  };

  const handleSubmit = (newEvent, type) => {
    if (type === FORM_TYPE.ADD) {
      const id = generateKey();
      addEvent(newEvent, id);
    } else if (type === FORM_TYPE.EDIT) {
      const id = newEvent.id;
      editEvent(newEvent, id);
      history.push(`/events/${id}`);
    }

    alert("제출이 완료되었습니다");
  };

  return (
    <>
      {isLoggedIn ? (
        <section>
          <Header />
          <Switch>
            <Route exact path={routes.HOME}>
              <CalenderHeader
                onMovePrevOrNext={setNewWeek}
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
                onMovePrevOrNext={setNewDate}
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
                type={FORM_TYPE.ADD}
                weeklyEvent={weeklyEvent}
                onSubmit={handleSubmit}
              />
            </Route>

            <Route exact path={routes.EDIT_EVENT}>
              <EventForm
                type={FORM_TYPE.EDIT}
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

            <Route path="/calender">
              <Redirect to={routes.HOME} />
            </Route>
          </Switch>
        </section>
      ) : (
        <Switch>
          <Route path={routes.HOME}>
            <Login />
          </Route>
        </Switch>
      )}
    </>
  );
};

const mapStateToProps = ({ dailyEvent, weeklyEvent, userData }) => {
  return { dailyEvent, weeklyEvent, userData };
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
