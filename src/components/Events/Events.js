import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
            <div className={styles.eachEvent}>
              <span>{date}</span>
              <span>from {startAt} to {endAt}</span>
              <span>{title}</span>
              <span>{detail}</span>
              <button onClick={() => {
                return removeEvents(userId, date, startAt, endAt)}}>
                DEL
              </button>
              <button>
                <Link to={{
                  pathname: `/event/edit/${date}/${startAt + endAt}`,
                  state: {...eachEvent},
                }}>
                  EDIT
                </Link>
              </button>
            </div>
          );
        })}
    </ul>
  );
}
