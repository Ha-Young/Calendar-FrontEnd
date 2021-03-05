import React from "react";
import TableRow from "./TableRow/TableRow";
import EntryBox from "../../../../EntryBox/EntryBox";
import styles from "./Table.module.css";

const Table = function ({
  updateDateWithTime,
  tableId,
  tableRow,
  events
}) {

  const eventsByDate = events.byDates[tableId];

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
      {!!eventsByDate && eventsByDate.map(event => (
        <EntryBox event={event} key={event.id} isWeeklySchedule={false} />
      ))}
    </div>
  );
};

export default Table;
