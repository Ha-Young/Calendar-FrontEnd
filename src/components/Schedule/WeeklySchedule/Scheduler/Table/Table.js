import React, { Fragment } from "react";
import TableColumn from "./TableColumn/TableColumn";
import EntryBox from "../../../../EntryBox/EntryBox";
import styles from "./Table.module.css";

const Table = function ({
  updateDateWithTime,
  tableColumn,
  tableRow,
  year,
  monthArray,
  events
}) {
  return (
    <div className={styles["table"]}>
      {tableColumn.map((dateNumber, i) => {
        const month = monthArray[i] > 9 ? monthArray[i] : `0${monthArray[i]}`;
        const dateNumberString = dateNumber > 9 ? dateNumber : `0${dateNumber}`;

        const dateString = `${year}-${month}-${dateNumberString}`;
        const eventsOfDate = events.byDates[dateString];

        return (
          <Fragment key={`col${dateNumber}`}>
            {!!eventsOfDate && eventsOfDate.map(event => (
              <EntryBox event={event} key={event.id} isWeeklySchedule={true} />
            ))}
            <TableColumn
              dateString={dateString}
              tableRow={tableRow}
              updateDateWithTime={updateDateWithTime}
            />
          </Fragment>
        )
      })}
    </div>
  );
};

export default Table;
