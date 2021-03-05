import React from "react";
import { Link, useLocation } from "react-router-dom";
import { WiredButton, WiredListbox } from "wired-elements";

import styles from "./Events.module.css";

export default function EventDetail({ removeEvents }) {
  const location = useLocation();

  const eventData = {...location.state}; 

  const { date, startAt, endAt, title, detail, userId } = eventData;
  
  return (
    <wired-listbox className={styles.eachEvent}>
      <wired-item>{date}</wired-item>
      <wired-item>from {startAt} to {endAt}</wired-item>
      <wired-item>{title}</wired-item>
      <wired-item>{detail}</wired-item>
      <wired-button onClick={() => removeEvents(userId, date, startAt, endAt)}>
        DEL
      </wired-button>
      <wired-button>
        <Link to={{
          pathname: `/event/${date}/${startAt + endAt}`,
          state: {...eventData},
        }}>
          EDIT
        </Link>
      </wired-button>
    </wired-listbox>
  );
}
