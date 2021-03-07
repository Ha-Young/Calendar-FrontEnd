import React from "react";
import { useHistory } from "react-router";
import Form from "../../../containers/EventContainer/FromContainer";
import { FORM_ID, MODIFY_BUTTON } from "../../../constants/common";
import styles from "./EventDetail.module.css";
import PropTypes from "prop-types";

function EventDetail({
  location: { state },
  dispatchedEditEvent,
  deleteEvent,
}) {
  const history = useHistory();

  return (
    <div className={styles.detailContainer}>
      <div className={styles.detailBox}>
        <Form
          {...state}
          formId={FORM_ID.EDIT}
          dispatchedEditEvent={dispatchedEditEvent}
        />
        <button form={FORM_ID.EDIT}>
          {MODIFY_BUTTON.EDIT}
        </button>
        <button onClick={() => {
          deleteEvent();
          history.goBack();
        }}>
          {MODIFY_BUTTON.REMOVE}
        </button>
      </div>
    </div>
  );
}

export default EventDetail;

EventDetail.propTypes = {
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
