import React, { Fragment } from "react";
import { months, weeks } from "../../constants/DateConstants";

export default function DateSelector() {
  return (
    <Fragment>
      <div className="주간 스케출"></div>
      <select className="months">
        {months.map((month) => {
          return <option key={month + "m"}>{month}월</option>
        })}
      </select>

      <select className="weeks">
        {weeks.map((week) => {
          return <option key={week + "w"}>{week}주</option>
        })}
      </select>
    </Fragment>

  );
}
