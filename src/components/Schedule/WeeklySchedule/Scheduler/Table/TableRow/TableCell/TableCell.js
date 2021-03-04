import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./TableCell.module.css";

const TableCell = function ({ updateDateWithTime, cellId, events }) {
  let history = useHistory();

  function handleCellClick() {
    updateDateWithTime(cellId);
    history.push("/events/new");
    //events 받아와야됨
  }

  return (
    <div className={styles["table-cell"]} onClick={handleCellClick}>
    </div>
  );
};

export default TableCell;
