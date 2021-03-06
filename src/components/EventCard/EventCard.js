import React from "react";
import styles from "./EventCard.module.css";
import { Link, useLocation } from "react-router-dom";
import { generateCardHeight, generateCardLocation } from "../../utils/ui";

const EventCard = ({ event }) => {
  const {
    color,
    id,
    endTime,
    startTime,
    title,
  } = event;
  const location = useLocation();
  const cardHeight = generateCardHeight(startTime, endTime);
  const cardLocation = generateCardLocation(startTime);

  return (
    <Link to={{
      pathname: `/events/${id}`,
      state: { background: location },
    }}>
      <div
        className={styles.card}
        style={{
          background: color,
          height: `${cardHeight}px`,
          top: `${cardLocation}px`
        }}
      >
        {title}
      </div>
    </Link>

  );
};

export default EventCard;
