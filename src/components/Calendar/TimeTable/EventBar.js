import React from "react";
import { Link } from "react-router-dom";
import styles from "./EventBar.module.css";

export default function EventBar({ isWide, event, colorNum }) {
  const title = !isWide && event.title.length > 6 
    ? event.title.slice(0,6) + "..." 
    : event.title;
  
  const COLOR_SET_LENGTH = 5
  const circularColorNum = colorNum % COLOR_SET_LENGTH;
  const classList = [styles.EventBar, styles[`Color${circularColorNum}`]];
  if (isWide) {
    classList.push(styles.IsWide);
  }

  const className = classList.join(" ");

  const linkTo = {
    pathname:`/events/${event.id}`,
    state: { 
      selectedEvent: event,
      isReadMode: true,
      isUpdate: true,
    },
  }

  return (
    <Link
      to={linkTo}
    >
      <div 
        className={className}
        style={{
          height: `${50 * (event.length)}px`,
        }}
      >
        <span className={styles.Title}>
          {title}
        </span>
      </div>
    </Link>
  );
}
