import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./TableRow.module.css";

const TableRow = function ({ updateDateWithTime, rowId, events }) {
  let history = useHistory();
  //row click event => event 없으면 redirect to events/new 있으면 events/:eventId
  function handleRowClick() {
    updateDateWithTime(rowId)
    history.push("/events/new");
  }

  return (
    <div className={styles["table-row"]} onClick={handleRowClick}>
    </div>
  );
};

export default TableRow;
