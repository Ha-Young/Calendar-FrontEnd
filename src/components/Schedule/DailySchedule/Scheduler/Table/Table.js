import React from "react";
import styles from "./Table.module.css";
import TableRow from "./TableRow/TableRow";

const Table = function ({
  updateDateWithTime,
  tableId,
  tableRow,
  events
}) {
  return (
    <div className={styles["table"]}>
      {tableRow.map(rowNumber =>
      (
        <TableRow
          key={`row${rowNumber}`}
          rowId={`${tableId} ${rowNumber}`}
          updateDateWithTime={updateDateWithTime}
        />
      ))}
    </div>
  );
};

export default Table;
