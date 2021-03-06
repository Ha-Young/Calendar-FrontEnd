import React from "react";
import styles from "./EventDetailPage.module.css";
import PropTypes from "prop-types";

const EventDetail = ({ onEdit, event, onGoBack }) => {
  const {
    title,
    description,
    date,
    startTime,
    endTime,
  } = event;

  const handleGoBackClick = () => {
    onGoBack();
  };

  return (
    <div>
      <div className={styles.column}>
        <div className={styles.input}>{title}</div>
        <div className={styles.input}>{description}</div>
      </div>
      <div className={styles[`same-type`]}>
        <input
          className={styles.input}
          name="date"
          type="date"
          value={date}
          readOnly
        />
        <input
          className={styles.input}
          type="time"
          value={startTime}
          readOnly
        />
        <input
          className={styles.input}
          type="time"
          value={endTime}
          readOnly
        />
      </div>
      <button onClick={onEdit}>Edit!</button>
      <button onClick={handleGoBackClick}>Go Back!</button>
    </div>
  );
};

export default EventDetail;

EventDetail.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
  }),
  onEdit: PropTypes.func.isRequired,
  onGoBack: PropTypes.func.isRequired,
};
