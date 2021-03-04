import React from "react";
import styles from "./TableColumn.module.css";
import TableCell from "./TableCell/TableCell";

const TableColumn = function ({
  updateDateWithTime,
  tableRow,
  dateString,
}) {

  return (
    <div className={styles["table-column"]}>
      {tableRow.map(rowId => (
        <TableCell
          key={`cell${dateString} ${rowId}`}
          cellId={`${dateString} ${rowId}`}
          updateDateWithTime={updateDateWithTime}
        />
      ))}
    </div>
  );
};

export default TableColumn;
