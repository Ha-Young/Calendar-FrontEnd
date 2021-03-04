import React from "react";
import styles from "./Card.module.css";
import { Link, useHistory } from "react-router-dom";
import { generateCardHeight, generateCardLocation } from "../../utils/ui";

const Card = ({ content }) => {
  const {
    color,
    id,
    endTime,
    startTime,
    title,
  } = content;
  const cardLength = generateCardHeight(startTime, endTime);
  const cardLocation = generateCardLocation(startTime);

  return (
    <Link to={`/events/${id}`}>
      <div
        className={styles.card}
        style={{
          background: color,
          height: `${cardLength}px`,
          top: `${cardLocation}px`
        }}
      >
        {title}
      </div>
    </Link>

  );
};

export default Card;
