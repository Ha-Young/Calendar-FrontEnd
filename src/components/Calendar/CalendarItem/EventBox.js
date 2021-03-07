import React from "react";
import { Link } from "react-router-dom";
import styles from "./EventBox.module.css";
import PropTypes from "prop-types";

function EventBox(props) {
  return (
    <Link
      to={{
        pathname: `/events/${props.id}`,
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

EventBox.propTypes = {
  props: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired,
    length: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
