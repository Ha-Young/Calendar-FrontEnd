import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./TableRow.module.css";

const TableRow = function ({ updateDateWithTime, rowId }) {
  let history = useHistory();
  function handleRowClick() {
    updateDateWithTime(rowId)
    history.push("/events/new");
  }

  return (
    <div
      className={`${styles["table-row"]}`}
      onClick={handleRowClick}
    >
    </div>
  );
};

export default TableRow;


