import React from "react";
import Modal from "./Modal";
import styles from "./Modal.module.css";
import { GrLinkNext } from "react-icons/gr";
import "firebase/database";

export default function Event({
  handleModalClose,
  eventInfo,
  setEventInfo,
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

  return (
    <>
    <Modal>
      <button className={styles.close_btn} onClick={handleModalClose}>
        <GrLinkNext className={styles.icon}/>
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
      <label className={styles.label}>Start Day</label>
      <input
        className={styles.time_input}
        type="date"
        id="startDay"
        name="startDay"
        onChange={handleChange}
      />
      <label className={styles.label}>Start time</label>
      <input
        className={styles.time_input}
        type="time"
        id="startTime"
        onChange={handleChange}
        name="startTime"
      />
      <label className={styles.label}>End Day</label>
      <input
        className={styles.time_input}
        type="date"
        id="start"
        name="endDay"
        onChange={handleChange}
        name="endDay"
      />
      <label className={styles.label}>End time</label>
      <input
        className={styles.time_input}
        type="time"
        id="endTime"
        onChange={handleChange}
        name="endTime"
      />
    </Modal>
    </>
  );
}
