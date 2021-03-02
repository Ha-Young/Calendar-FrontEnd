import React from "react";
import styles from "./TableRow.module.css";
import { DAY_LIST } from "../../../../../../constants/calendarConstants";
import TableCell from "./TableCell/TableCell";

const TableRow = function () {
  return (
    <div className={styles["table-row"]}>
      {DAY_LIST.map(day => (
        <TableCell key={`cell${day}`} />
      ))}
    </div>
  );
};

export default TableRow;
