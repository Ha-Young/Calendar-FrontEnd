import React from "react";
import styles from "./EntryBox.module.css";
import { NavLink } from "react-router-dom";
import { generateEntryBoxHeight, generateEntryBoxLocation } from "../../utils/uiUtils";

const EntryBox = ({ event, isWeeklySchedule }) => {
  const {
    color,
    id,
    endTime,
    startTime,
    title,
  } = event;
  const start = Number(startTime.slice(0, 2));
  const end = Number(endTime.slice(0, 2));
  const EntryBoxLength = generateEntryBoxHeight(start, end);
  const EntryBoxLocation = generateEntryBoxLocation(start);

  return (
    <NavLink to={`/events/${id}`}>
      <div
        className={styles["entry-box"]}
        style={{
          "backgroundColor": color,
          height: `${EntryBoxLength}px`,
          width: isWeeklySchedule ? "12vw" : "100%",
          top: `${EntryBoxLocation}px`
        }}
      >
        {title}
      </div>
    </NavLink>

  );
};

export default EntryBox;
