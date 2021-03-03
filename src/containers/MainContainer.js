import React, { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Day from "../components/Calendar/Day/Day";
import Week from "../components/Calendar/Week/Week";
import AddEventButton from "../components/Button/AddEventButton";
import styles from "./MainContainer.module.css";
import EventModal from "../components/Modal/Modal";

import {
  NEXT,
  PREV,
  TO_DAY_CALENDAR,
  TO_WEEK_CALENDAR,
} from "../actions/index";

import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = (dispatch) => ({
  onChangeDayMode: () => dispatch({ type: TO_DAY_CALENDAR }),
  onChangeWeekMode: () => dispatch({ type: TO_WEEK_CALENDAR }),
  onPrevClick: () => dispatch({ type: PREV }),
  onNextClick: () => dispatch({ type: NEXT }),
  onAddEvent: (userInputEvent) => {
    console.log("onAddEvent is", userInputEvent);
    const { eventTitle, RangePicker, eventDescription } = userInputEvent;
    console.log(eventTitle, RangePicker, eventDescription);
    const eventStart = RangePicker[0].format("YYYY/MM/DD HH");
    const eventEnd = RangePicker[1].format("YYYY/MM/DD HH");
    const event = { eventTitle, eventDescription, eventStart, eventEnd };
    console.log("final event is", event);
  },
});

const MainContainer = ({
  state,
  onNextClick,
  onPrevClick,
  onChangeDayMode,
  onChangeWeekMode,
  onAddEvent,
}) => {
  console.log(state);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
              isDayCalendarShown={state.calendar.isDayCalendarShown}
              onPrevClick={onPrevClick}
              onNextClick={onNextClick}
            />
          </Route>
          <Route path="/Week">
            <Week
              now={state.calendar.currentTime}
              isDayCalendarShown={state.calendar.isDayCalendarShown}
              onPrevClick={onPrevClick}
              onNextClick={onNextClick}
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
