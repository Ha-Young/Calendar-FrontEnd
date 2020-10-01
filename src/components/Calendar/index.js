import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./Calendar.module.css";
import format from "date-fns/format";
import Header from "../Header/Header"
import Daily from "./Daily";
import Weekly from "./Weekly";
import Modal from "../Modal/Modal";
import Event from "../Modal/Event";
import ToggleButton from "../Header/ToggleButton";
import MainContainer from "../../containers/MainContainer";

export default function Calendar ({
  getDate,
  handleYesterday,
  handleTomorrow,
  times,
  clickToOpenModal,
  clickToCloseModal,
  isModalOpen,
}) {
  const formatYear = format(getDate, "yyyy");
  const formatMonth = format(getDate, "MMM");
  const formatDay = format(getDate, "do");

  const initialValue = {
    taskTitle: "",
    taskDesc: "",
    startDay: "",
    startTime: "",
    endDay: "",
    endTime: "",
  };

  const [inputValue, setInputValue] = useState(initialValue);
  const [differenceHour, setDifferenceHour] = useState(0);

  return (
    <div className={styles.calendar_wrap}>
      <div className={styles.Calendar}>
        <ToggleButton />
        <Header
          year={formatYear}
          month={formatMonth}
          day={formatDay}
          times={times}
          handleYesterday={handleYesterday}
          handleTomorrow={handleTomorrow}
        />
        <Switch>
          <Route path="/" exact>
            <Daily
              times={times}
              openEvent={clickToOpenModal}
              isModalOpen={isModalOpen}
              eventArea={differenceHour}
              eventInfo={inputValue}
            />
          </Route>
          <Route path="/weekly">
            <Weekly
              times={times}
              openEvent={clickToOpenModal}
              isModalOpen={isModalOpen}
              eventArea={differenceHour}
              eventInfo={inputValue}
            />
          </Route>
        </Switch>
      </div>
      {isModalOpen &&
        <Modal handleModalClose={clickToCloseModal}>
          <Event
            handleModalClose={clickToCloseModal}
            eventInfo={inputValue}
            setEventInfo={setInputValue}
            timeGap={differenceHour}
            setTimeGap={setDifferenceHour}
          />
        </Modal>
      }
    </div>
  );
}
