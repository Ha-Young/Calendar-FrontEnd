import React from "react";
import styles from "./Sidebar.module.css";
import uuid from "react-uuid";

export default function SidebarUpcomingEventBoard({ events }) {
  return (
    <>
      <h3 className={`${styles.font}`}>Upcoming Events</h3>
      <ul>
        <li>----------------------</li>
        {events.length &&
          events.map((event, index) => {
            return (
              <li key={uuid()}>
                <span
                  className={`${styles.eventFont}`}
                >{`${event.title} ${event.description}`}</span>
              </li>
            );
          })}
      </ul>
    </>
  );
}
