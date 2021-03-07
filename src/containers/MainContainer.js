import React, { useState } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import Navbar from "components/Navbar";
import Calendar from "components/Calendar";
import MainButton from "components/Button";
import EventModal from "components/Modal";

import * as actions from "actions";
import PropTypes from "prop-types";
import styles from "./MainContainer.module.css";

const mapStateToProps = (state) => {
  return {
    currentTime: state.calendar.currentTime,
    events: state.calendar.events,
    calendarMode: state.calendar.calendarMode,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onshowDayCalendar: () => dispatch(actions.toDayCalendar()),
  onshowWeekCalendar: () => dispatch(actions.toWeekCalendar()),

  onPrevClick: () => dispatch(actions.prevClick()),
  onNextClick: () => dispatch(actions.nextClick()),

  onAddEvent: (userInputEvent) => dispatch(actions.addEvent(userInputEvent)),
  onEditEvent: (eventId, userInputEvent) =>
    dispatch(actions.editEvent(eventId, userInputEvent)),
  onDeleteEvent: (eventId) => {
    dispatch(actions.deleteEvent(eventId));
  },
});

const MainContainer = ({
  currentTime,
  events,
  calendarMode,
  onNextClick,
  onPrevClick,
  onshowDayCalendar,
  onshowWeekCalendar,
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
          onshowDayCalendar={onshowDayCalendar}
          onshowWeekCalendar={onshowWeekCalendar}
        />
      </div>
      <div className={`${styles.main}`}>
        <EventModal
          isModalVisible={isModalVisible}
          onClickOk={() => {
            handleOk();
          }}
          onClickCancel={() => {
            handleCancel();
          }}
          onAddEvent={onAddEvent}
          onDeleteEvent={onDeleteEvent}
          onEditEvent={onEditEvent}
          eventInfo={eventInfo}
        />
        <Switch>
          <Route
            exact
            path={["/", "/calendar", "/calendar/day", "/calendar/week"]}
          >
            <Calendar
              now={currentTime}
              events={events}
              calendarMode={calendarMode}
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
          <Route path="*">
            <div>404 error</div>
          </Route>
        </Switch>
        <MainButton
          onClick={() => {
            showModal();
          }}
        />
      </div>
    </div>
  );
};

MainContainer.propTypes = {
  currentTime: PropTypes.object,
  events: PropTypes.array,
  calendarMode: PropTypes.string,
  onNextClick: PropTypes.func,
  onPrevClick: PropTypes.func,
  onshowDayCalendar: PropTypes.func,
  onshowWeekCalendar: PropTypes.func,
  onAddEvent: PropTypes.func,
  onDeleteEvent: PropTypes.func,
  onEditEvent: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
