import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Dropdown from "../../Dropdown/Dropdown";
import { TIME_LIST } from "../../../constants/calendarConstants";
import styles from "./EventForm.module.css";

const EventForm = function ({ setIsSchedule }) {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  let location = useLocation();

  function handleSubmit(event) {
    event.preventDefault();
    //event object만들어서 redux state에 저장해주고
    //redirect to calendar
    // (돌아갈 때 무조건 daily 뜨게 해놓고)
    // (Calendar도 event들어간거 update해줘야됨)
    console.log(startTime);
    console.log(endTime);

    const eventObject = {
      startDate,
      endDate,
      startDateObject = {
        title,
        startTime,
        endDate,
        endTime,
        description
      },
      endDateObject = {
        title,
        startDate,
        startTime,
        endTime,
        description
      }
    }
  }

  function createItemTag(item) {
    return (
      <div>{item}</div>
    );
  }

  useEffect(() => {
    setIsSchedule(location.pathname);
  }, []);

  return (
    <form className={styles["event-form"]} onSubmit={handleSubmit}>
      <h3>Event Form</h3>
      <div className={styles["title-container"]}>
        <input
          type="text"
          className={styles["event-title"]}
          value={title}
          onChange={event => setTitle(event.target.value)}
          placeholder="ADD TITLE"
          required
        />
      </div>
      <div className={styles["time-container"]}>
        <input
          type="date"
          value={startDate}
          onChange={event => setStartDate(event.target.value)}
          required
        />
        <Dropdown
          className="start-time"
          list={TIME_LIST}
          chooseItem={value => setStartTime(value)}
          createItemTag={createItemTag}
        />
        <p>-</p>
        <input
          type="date"
          value={endDate}
          onChange={event => setEndDate(event.target.value)}
          required
        />
        <Dropdown
          className="end-time"
          list={TIME_LIST}
          chooseItem={value => setEndTime(value)}
          createItemTag={createItemTag}
        />
      </div>
      <div className={styles["description-container"]}>
        <textarea
          value={description}
          placeholder="Type your event description here..."
          onChange={event => setDescription(event.target.value)}
          required
        />
      </div>
      <div className={styles["submit-button-container"]}>
        <input
          type="submit"
          className={styles["submit-button"]}
          value="Submit"
        />
      </div>
    </form>
  );
};

export default EventForm;


/*
events: {
    byStartDate: {
      01/01: {
        sdfadf
      }
    },
    byEndDate: {

    },
    allStartDates: [],
    allEndDates: [],
  },
*/
