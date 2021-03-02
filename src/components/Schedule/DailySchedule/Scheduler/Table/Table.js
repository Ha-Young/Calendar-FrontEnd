import React from "react";
import styles from "./Table.module.css";
import TableRow from "./TableRow/TableRow";

const Table = function ({ tableList }) {
  return (
    <div className={styles["table"]}>
      {tableList.map(element =>
      (
        <TableRow key={`row${element}`} />
      ))}
    </div>
  );
};

export default Table;
