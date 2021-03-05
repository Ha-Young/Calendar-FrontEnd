import React from "react";
import Form from "../EventItem/Form";
import styles from "./EventDetail.module.css";

function EventDetail({
  location: { state }
}) {
  return (
    <div className={styles.detailContainer}>
      <div className={styles.detailBox}>
        <Form {...state} formId={"change"} />
        <button form="change">Edit</button>
        <button form="change">Remove</button>
      </div>
    </div>
  );
}

export default EventDetail;
