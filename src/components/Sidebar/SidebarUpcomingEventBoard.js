import React from "react";
import styles from "./Sidebar.module.css";

export default function SidebarUpcomingEventBoard({ events }) {
  return (
    <>
      <h3 className={`${styles.font}`}>Upcoming Events</h3>
      <ul>
        <li>----------------------</li>
        {events.length &&
          events.map((event) => {
            console.log(event);
            return (
              <li>
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
