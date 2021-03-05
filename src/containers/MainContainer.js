import React, { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Day from "../components/Calendar/Day/Day";
import Week from "../components/Calendar/Week/Week";
import AddEventButton from "../components/Button/AddEventButton";
import styles from "./MainContainer.module.css";
import EventModal from "../components/Modal/EventModal";

import {
  NEXT,
  PREV,
  TO_DAY_CALENDAR,
  TO_WEEK_CALENDAR,
  ADD_EVENT,
  DELETE_EVENT,
} from "../actions/index";

import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import uuid from "react-uuid";

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = (dispatch) => ({
  onChangeDayMode: () => dispatch({ type: TO_DAY_CALENDAR }),
  onChangeWeekMode: () => dispatch({ type: TO_WEEK_CALENDAR }),
  onPrevClick: () => dispatch({ type: PREV }),
  onNextClick: () => dispatch({ type: NEXT }),
  onAddEvent: (userInputEvent) => {
    const { eventTitle, RangePicker, eventDescription } = userInputEvent;
    const eventDate = RangePicker[0].format("YYYY/MM/DD");
    const eventStartHour = RangePicker[0].format("HH");
    const eventEndHour = RangePicker[1].format("HH");
    const event = {
      Id: uuid(),
      Title: eventTitle,
      Description: eventDescription,
      Date: eventDate,
      StartHour: eventStartHour,
      EndHour: eventEndHour,
    };
    dispatch({ type: ADD_EVENT, payload: event });
  },
  onDeleteEvent: (eventId) => {
    dispatch({ type: DELETE_EVENT, payload: eventId });
  },
});

const MainContainer = ({
  state,
  onNextClick,
  onPrevClick,
  onChangeDayMode,
  onChangeWeekMode,
  onAddEvent,
  onDeleteEvent,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [eventInfo, setEventInfo] = useState({});

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.Navbar}`}>
        <Navbar
          onChangeDayMode={onChangeDayMode}
          onChangeWeekMode={onChangeWeekMode}
        />
      </div>
      <div className={`${styles.main}`}>
        <EventModal
          isModalVisible={isModalVisible}
          handleOk={() => handleOk()}
          handleCancel={() => handleCancel()}
          onAddEvent={onAddEvent}
        />
        <Switch>
          <Route path="/Day" exact>
            <Day
              now={state.calendar.currentTime}
              events={state.calendar.events}
              isDayCalendarShown={state.calendar.isDayCalendarShown}
              onPrevClick={onPrevClick}
              onNextClick={onNextClick}
              onDeleteEvent={onDeleteEvent}
            />
          </Route>
          <Route path="/Week">
            <Week
              now={state.calendar.currentTime}
              events={state.calendar.events}
              isDayCalendarShown={state.calendar.isDayCalendarShown}
              onPrevClick={onPrevClick}
              onNextClick={onNextClick}
              onDeleteEvent={onDeleteEvent}
            />
          </Route>
          <Route path="/Event">
            <div>Event</div>
          </Route>
        </Switch>
        <AddEventButton
          onClick={() => {
            showModal();
          }}
        />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
