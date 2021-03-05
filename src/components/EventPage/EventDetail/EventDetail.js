import React from "react";
import Form from "../EventItem/Form";
import { FORM_ID, MODIFY_BUTTON } from "../../../constants/common";
import styles from "./EventDetail.module.css";
import { connect } from "react-redux";
import { editEvent, removeEvent } from "../../../actions";

function EventDetail({
  history,
  location: { state },
  dispatchedEditEvent,
  deleteEvent,
}) {
  return (
    <div className={styles.detailContainer}>
      <div className={styles.detailBox}>
        <Form {...state} formId={FORM_ID.EDIT} history={history} dispatchedEditEvent={dispatchedEditEvent} />
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

function mapDispatchToProps(dispatch, ownProps) {
  const event = {...ownProps.location.state};

  return {
    dispatchedEditEvent: (event) => dispatch(editEvent(event)),
    deleteEvent: () => {
      dispatch(removeEvent(event));
      ownProps.history.goBack();
    },
  };
}

export default connect(null, mapDispatchToProps)(EventDetail);
