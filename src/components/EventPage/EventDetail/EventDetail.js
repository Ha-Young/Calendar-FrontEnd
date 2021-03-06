import React from "react";
import Form from "../../../containers/EventContainer/FromContainer";
import { FORM_ID, MODIFY_BUTTON } from "../../../constants/common";
import styles from "./EventDetail.module.css";
import PropTypes from "prop-types";

function EventDetail({
  history,
  location: { state },
  dispatchedEditEvent,
  deleteEvent,
}) {
  return (
    <div className={styles.detailContainer}>
      <div className={styles.detailBox}>
        <Form
          {...state}
          formId={FORM_ID.EDIT}
          history={history}
          dispatchedEditEvent={dispatchedEditEvent}
        />
        <button form={FORM_ID.EDIT}>
          {MODIFY_BUTTON.EDIT}
        </button>
        <button onClick={() => deleteEvent()}>
          {MODIFY_BUTTON.REMOVE}
        </button>
      </div>
    </div>
  );
}

export default EventDetail;

EventDetail.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      from: PropTypes.number.isRequired,
      to: PropTypes.number.isRequired,
      length: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  dispatchedEditEvent: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
};
