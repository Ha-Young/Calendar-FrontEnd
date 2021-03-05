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
      {allEvents.length > 0 && 
        allEvents.map(eachEvent => {
          const { date, startAt, endAt, title, userId } = eachEvent;
          return (
            <div className={styles.eachEvent}>
              <span>{title}</span>
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
