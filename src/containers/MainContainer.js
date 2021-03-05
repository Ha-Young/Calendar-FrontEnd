import React, { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Day from "../components/Calendar/Day/Day";
import Week from "../components/Calendar/Week/Week";
import AddEventButton from "../components/Button/AddEventButton";
import styles from "./MainContainer.module.css";
import EventModal from "../components/Modal/EventModal";
import { formatUserInput } from "../utils/utils";

import { uploadData, deleteData } from "../api/index";

import {
  NEXT,
  PREV,
  TO_DAY_CALENDAR,
  TO_WEEK_CALENDAR,
  ADD_EVENT,
  DELETE_EVENT,
  EDIT_EVENT,
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
    const event = formatUserInput(null, userInputEvent);
    uploadData(event);
    dispatch({ type: ADD_EVENT, payload: event });
  },

  onEditEvent: (eventId, userInputEvent) => {
    const event = formatUserInput(eventId, userInputEvent);
    uploadData(event);
    dispatch({ type: EDIT_EVENT, payload: { eventId, event } });
  },

  onDeleteEvent: (eventId) => {
    deleteData(eventId);
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
  onEditEvent,
}) => {
  const [eventInfo, getEventInfo] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onClickGetEventInfo = (eventInfo) => {
    getEventInfo(eventInfo);
  };

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
          onDeleteEvent={onDeleteEvent}
          onEditEvent={onEditEvent}
          eventInfo={eventInfo}
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
              onClickGetEventInfo={onClickGetEventInfo}
              showModal={showModal}
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
              onClickGetEventInfo={onClickGetEventInfo}
              showModal={showModal}
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
