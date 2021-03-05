import React from "react";
import { Link } from "react-router-dom";
import styles from "./EventBox.module.css";

function EventBox(props) {
  return (
    <Link
      to={{
        pathname: `/events/:${props.id}`,
        state: {...props},
      }}
      className={styles.link}>
      <div
        className={styles.event}
        style={{height: `${48 * props.length}px`}}
      >
        <h2>{props.title}</h2>
      </div>
    </Link>
  );
}

export default EventBox;
