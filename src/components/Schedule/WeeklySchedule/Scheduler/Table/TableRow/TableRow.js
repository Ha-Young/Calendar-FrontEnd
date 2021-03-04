import React from "react";
import styles from "./TableRow.module.css";
import TableCell from "./TableCell/TableCell";

const TableRow = function ({
  updateDateWithTime,
  tableId,
  tableColumn,
  rowId,
  events
}) {
  return (
    <div className={styles["table-row"]}>
      {tableColumn.map(dateNumber => (
        <TableCell
          key={`cell${tableId}${dateNumber}${rowId}`}
          cellId={`${tableId}-${dateNumber} ${rowId}`}
          updateDateWithTime={updateDateWithTime}
        />
      ))}
    </div>
  );
};

export default TableRow;
