import React from "react";
import Form from "../EventItem/Form";
import { MODIFY_BUTTON } from "../../../constants/common";
import styles from "./EventDetail.module.css";

function EventDetail({
  location: { state }
}) {
  return (
    <div className={styles.detailContainer}>
      <div className={styles.detailBox}>
        <Form {...state} />
        <button>{MODIFY_BUTTON.EDIT}</button>
        <button>{MODIFY_BUTTON.REMOVE}</button>
      </div>
    </div>
  );
}

export default EventDetail;
