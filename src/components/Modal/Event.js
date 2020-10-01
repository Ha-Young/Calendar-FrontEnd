import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import styles from "./Modal.module.css";
import { GrLinkNext } from "react-icons/gr";
import format from "date-fns/format";
import 'firebase/database';
import firebase from 'firebase/app';
import { differenceInHours } from "date-fns";

export default function Event({ 
  handleModalClose,
  eventInfo,
  setEventInfo,
  timeGap,
  setTimeGap,
}) {


  const handleChange = (ev) => {
    const { value, name } = ev.target;

    switch (name) {
      case "taskTitle":
        setEventInfo({ ...eventInfo, taskTitle: value });
        break;
      case "taskDesc":
        setEventInfo({ ...eventInfo, taskDesc: value });
        break;
      case "startDay":
        setEventInfo({ ...eventInfo, startDay: value });
        break;
      case "startTime":
        setEventInfo({ ...eventInfo, startTime: value });
        break;
      case "endDay":
        setEventInfo({ ...eventInfo, endDay: value });
        break;
      case "endTime":
        setEventInfo({ ...eventInfo, endTime: value });
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    const { startDay, endDay, startTime, endTime} = eventInfo;

    const combinedStartDate = startDay.replace(/-/g, "");
    const startYear = combinedStartDate.substring(0, 4);
    const startMonth = combinedStartDate.substring(4, 6);
    const startDaytime = combinedStartDate.substring(6);

    const combinedStartTime = startTime.replace(":", "");
    const startHour = combinedStartTime.substring(0, 2);
    const startMinute = combinedStartTime.substring(2);

    const combinedEndDate = endDay.replace(/-/g, "");
    const endYear = combinedEndDate.substring(0, 4);
    const endMonth = combinedEndDate.substring(4, 6);
    const endDaytime = combinedEndDate.substring(6);

    const combinedEndTime = endTime.replace(":", "");
    const endHour = combinedEndTime.substring(0, 2);
    const endMinute = combinedEndTime.substring(2);

    const result = differenceInHours(
      new Date(endYear, endMonth, endDaytime, endHour, endMinute),
      new Date(startYear, startMonth, startDaytime, startHour, startMinute)
    )

    setTimeGap(result);

  }, [eventInfo])




  console.log(eventInfo);

  return (
    <Modal>
      <button className={styles.close_btn} onClick={handleModalClose}>
        <GrLinkNext style={{ color: "white", fontSize: "20px" }} />
      </button>
      <input
        className={styles.title}
        placeholder="Add Title"
        onChange={handleChange}
        name="taskTitle"
      />
      <input
        className={styles.comment}
        placeholder="Add Comment"
        onChange={handleChange}
        name="taskDesc"
      />
      <label style={{ margin: "10px" }}>Start Day</label>
      <input
        style={{ marginBottom: "10px" }}
        type="date"
        id="start"
        name="startDay"
        onChange={handleChange}
      />
      <label style={{ margin: "10px" }}>Start time</label>
      <input
        style={{ marginBottom: "10px" }}
        type="time"
        id="startTime"
        onChange={handleChange}
        name="startTime"
      />
      <label style={{ margin: "10px" }}>End Day</label>
      <input
        style={{ marginBottom: "10px" }}
        type="date"
        id="start"
        name="trip-end"
        onChange={handleChange}
        name="endDay"
      />
      <label style={{ margin: "10px" }}>End time</label>
      <input
        style={{ marginBottom: "10px" }}
        type="time"
        id="endTime"
        onChange={handleChange}
        name="endTime"
      />
    </Modal>
  );
}