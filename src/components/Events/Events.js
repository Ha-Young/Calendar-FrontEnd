import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { WiredButton, WiredListbox } from "wired-elements";

import styles from "./Events.module.css";
import { getAllUserData } from "../../api";

export default function Events({ userId, removeEvents }) {
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    async function getAllData() {
      const allData = await getAllUserData(userId);
      setAllEvents(allData);
    }
    
    getAllData();
  }, []);
    
  return (
    <ul>
      {allEvents.length && 
        allEvents.map(eachEvent => {
          const { date, startAt, endAt, title, detail, userId } = eachEvent;
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
                  state: {...eachEvent},
                }}>
                  EDIT
                </Link>
              </wired-button>
            </wired-listbox>
          );
        })}
    </ul>
  );
}
