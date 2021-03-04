import React from "react";
import styles from "./Table.module.css";
import TableRow from "./TableRow/TableRow";

const Table = function ({
  updateDateWithTime,
  tableId,
  tableColumn,
  tableRow,
  events
}) {
  return (
    <div className={styles["table"]}>
      {tableRow.map(element =>
      (
        <TableRow
          key={`row${element}`}
          rowId={element}
          tableColumn={tableColumn}
          tableId={tableId}
          updateDateWithTime={updateDateWithTime}
        />
      ))}
    </div>
  );
};

export default Table;
